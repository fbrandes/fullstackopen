import Button from "./Button.jsx";

const Person = ({ person, removePerson }) => {
    const handleRemoveClick = () => {
        const confirm = window.confirm(`Do you really want to remove ${person.name} ?`);

        if (confirm) {
            removePerson(person);
        }
    };
    return (
        <p>
            {person.name} {person.phoneNumber}{" "}
            <Button label="delete" onClick={handleRemoveClick} />
        </p>
    );
};
export default Person;