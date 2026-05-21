import {useEffect, useState} from 'react'
import PersonForm from "./component/PersonForm.jsx";
import {Persons} from "./component/Persons.jsx";
import Filter from "./component/Filter.jsx";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [search, setSearch] = useState("");
    const filterPersons = search !== "" ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons;

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((response) => {
            setPersons(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter text="filter shown with:" search={search} setSearch={setSearch}/>
            <PersonForm persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <Persons persons={filterPersons}/>
        </div>
    )
}

export default App