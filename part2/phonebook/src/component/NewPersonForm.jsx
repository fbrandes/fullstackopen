import {useState} from "react";

const NewPersonForm = ({setPersons}) => {
    const [newName, setNewName] = useState("");

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPersons((persons) => [...persons, { name: newName }]);
        setNewName("");
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </>;
}

export default NewPersonForm;