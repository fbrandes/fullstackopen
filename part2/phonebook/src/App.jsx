import {useEffect, useState} from 'react'
import PersonForm from "./component/PersonForm.jsx";
import {Persons} from "./component/Persons.jsx";
import Filter from "./component/Filter.jsx";
import personsApi from "./services/personsApi.js";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [search, setSearch] = useState("");
    const filterPersons = search !== "" ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons;

    useEffect(() => {
        personsApi.getAllPersons("http://localhost:3001/persons").then((persons) => {
            setPersons(persons);
        });
    }, []);


    const createPerson = (newPerson) =>
        personsApi.createPerson(newPerson).then((createdPerson) => {
            setPersons((persons) => [...persons, createdPerson]);
        });


    const removePerson = (person) =>
        personsApi
            .deletePerson(person.id)
            .catch((e) => {
                const errorMessage =
                    e.status === 404
                        ? `${person.name} has not been found`
                        : `Sorry, an error occurred while deleting ${person.name}`;
                alert(errorMessage);
            })
            .finally(() => {
                setPersons(persons => persons.filter((p) => p.id !== person.id));
            });

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter text="filter shown with:" search={search} setSearch={setSearch}/>
            <PersonForm persons={persons} addPerson={createPerson}/>
            <h2>Numbers</h2>
            <Persons persons={filterPersons} removePerson={removePerson}/>
        </div>
    )
}

export default App