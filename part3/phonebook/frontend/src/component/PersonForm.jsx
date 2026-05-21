import {useState} from "react";

const PersonForm = ({persons, addPerson}) => {
    const [newName, setNewName] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");

    const duplicateName = () => {
        return persons.some((person) => person.name === newName);
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNewPhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(duplicateName()){
            alert(`${newName} is already added to the phonebook`);
            return;
        }

        const newPerson = { name: newName.trim(), number: newPhoneNumber.trim() };

        addPerson(newPerson).then(() => {
            setNewName("");
            setNewPhoneNumber("");
        });
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Add a new Person</h3>
                <div>name: <input value={newName} onChange={handleNameChange}/></div>
                <div>number: <input value={newPhoneNumber} onChange={handleNewPhoneNumberChange}/></div>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </>;
}

export default PersonForm;