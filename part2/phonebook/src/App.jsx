import {useState} from 'react'
import NewPersonForm from "./component/NewPersonForm.jsx";
import {Persons} from "./component/Persons.jsx";
import SearchFilter from "./component/SearchFilter.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: "Arto Hellas", number: "040-123456", id: 1},
        {name: "Ada Lovelace", number: "39-44-5323523", id: 2},
        {name: "Dan Abramov", number: "12-43-234345", id: 3},
        {name: "Mary Poppendieck", number: "39-23-6423122", id: 4},
    ]);

    const [search, setSearch] = useState("");

    const filterPersons = search !== "" ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchFilter text="filter shown with:" search={search} setSearch={setSearch}/>
            <NewPersonForm persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <Persons persons={filterPersons}/>
        </div>
    )
}

export default App