import {useState} from 'react'
import NewPersonForm from "./component/NewPersonForm.jsx";
import {Persons} from "./Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }])

    const addPerson = (event) => {
        event.preventDefault();

        const newPerson = {
            name: newName,
        };

        setPersons(persons.concat(newPerson));
        setNewName("");
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <NewPersonForm setPersons={setPersons}/>
            <h2>Numbers</h2>
            <Persons persons={persons}/>
        </div>
    )
}

export default App