import Person from "./Person.jsx";

export const Persons = ({persons, removePerson}) => (
    <ul>
        {persons.map((person) => (
            <li key={person.name}>
                <Person person={person} removePerson={removePerson} />
            </li>
        ))}
    </ul>
);