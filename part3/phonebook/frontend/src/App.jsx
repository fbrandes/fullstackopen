import {useEffect, useState} from 'react'
import PersonForm from "./component/PersonForm.jsx";
import Filter from "./component/Filter.jsx";
import personsApi from "./services/personsApi.js";
import Persons from "./component/Persons.jsx";
import Notification from "./component/Notification.tsx";
import Person from "./component/Person.jsx";

const App = () => {
    const [persons, setPersons] = useState<Persons>([]);
    const [search, setSearch] = useState("");
    const [notificationMessage, setNotificationMessage] = useState(null);

    const filterPersons = search !== "" ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons;

    useEffect(() => {
        personsApi.getAllPersons().then((persons) => {
            setPersons(persons);
        });
    }, []);

    const getPersonByName = (name) => {
        return persons.find((person) => person.name === name);
    };

    const setNotification = (message) => {
        setNotificationMessage(message);
        setTimeout(() => {
            setNotificationMessage(null);
        }, 5000);
    };

    const createPerson = (newPerson) => {
        const existingPersonId = getPersonByName(newPerson.name)?.id;

        if (existingPersonId != null) {
            const confirm = window.confirm(
                `${newPerson.name} is already added to the phonebook, replace the old number with a new one?`,
            );

            if (confirm) {
                return personsApi
                    .updatePerson(existingPersonId, newPerson)
                    .then((updatedPerson) => {
                        setPersons((persons) =>
                            persons.map((p) =>
                                p.id === existingPersonId ? updatedPerson : p,
                            ),
                        );
                        setNotification({
                            text: `Updated ${newPerson.name}`,
                            type: 'success',
                        });
                    })
                    .catch((e) => {
                        if (e.status === 404) {
                            setNotification({
                                text: `Information of ${newPerson.name} has already been removed from server`,
                                type: 'error',
                            });
                            setPersons(persons.filter((n) => n.id !== existingPersonId));
                        } else {
                            console.log(e.response.data.error);
                            setNotification({
                                text: `Sorry, an error occurred while updating ${newPerson.name}. ${e.response.data.error}`,
                                type: 'error',
                            });
                        }
                    });
            } else {
                return Promise.resolve(null);
            }
        }

        return personsApi
            .createPerson(newPerson)
            .then((createdPerson) => {
                setPersons((persons) => [...persons, createdPerson]);
                setNotification({
                    text: `Added ${newPerson.name}`,
                    type: 'success',
                });
            })
            .catch((err) => {
                console.log(err.response.data.error);
                setNotification({
                    text: `Sorry, an error occurred while creating ${newPerson.name}. ${err.response.data.error}`,
                    type: 'error',
                });
            });
    };


    const removePerson = (person) =>
        personsApi
            .deletePerson(person.id)
            .then(() => {
                setPersons((persons) => persons.filter((p) => p.id !== person.id));
                setNotification({
                    text: `Removed ${person.name}`,
                    type: 'success',
                });
            })
            .catch((e) => {
                if (e.status === 404) {
                    setNotification({
                        text: `${person.name} has already been deleted`,
                        type: 'error',
                    });
                    setPersons((persons) => persons.filter((p) => p.id !== person.id));
                } else {
                    setNotification({
                        text: `Sorry, an error occurred while deleting ${person.name}`,
                        type: 'error',
                    });
                }
            });

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notificationMessage} />
            <Filter text="filter shown with:" search={search} setSearch={setSearch}/>
            <PersonForm persons={persons} addPerson={createPerson}/>
            <h2>Numbers</h2>
            <Persons persons={filterPersons} removePerson={removePerson}/>
        </div>
    )
}

export default App;