const mongoose = require('mongoose');

const operation =
    process.argv.length === 3
        ? 'get all'
        : process.argv.length === 5
            ? 'add'
            : null;

if (!operation) {
    console.log('Wrong number of arguments. Give:');
    console.log('- password, name and number to add a new person');
    console.log('- just the password to get all the entries');
    process.exit(1);
}

const url = process.env.MONGO_URI;
mongoose.set('strictQuery', false);
mongoose.connect(url, {family: 4});

const PersonSchema = new mongoose.Schema({
    name: String,
    number: String,
});

const Person = mongoose.model('Person', PersonSchema);

switch (operation) {
    case 'add': {
        const name = process.argv[3];
        const number = process.argv[4];

        const newPerson = new Person({name, number});
        newPerson.save().then((res) => {
            console.log(`added ${res.name} number ${res.number} to phonebook`);
            mongoose.connection.close().then(r => console.log("Closed connection to MongoDB server"));
        });
        break;
    }
    case 'get all': {
        Person.find().then((res) => {
            console.log('phonebook:');
            res.forEach((person) => console.log(`${person.name} ${person.number}`));
            mongoose.connection.close().then(r => console.log("Closed connection to MongoDB server"));
        });
        break;
    }
}