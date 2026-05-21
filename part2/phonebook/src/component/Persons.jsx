import Person from "./Person.jsx";

export const Persons = ({persons}) => (
    <ul>
        {persons.map((person) => (
            <li key={person.name}>
                <Person person={person}/>
            </li>
        ))}
    </ul>
);