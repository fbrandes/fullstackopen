const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = process.env.MONGO_URI;

console.log('Connecting to', url);
mongoose
    .connect(url, { family: 4 })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB: ', err));

const PersonSchema = new mongoose.Schema({
    name: { type: String, minLength: 3, required: true },
    number: {
        type: String,
        required: true,
        minLength: 8,
        validate: [
            (v) => /^[0-9]{2,3}-[0-9]+$/.test(v),
            'The number must be formed of two parts that are separated by -, the first part has two or three numbers and the second part also consists of numbers',
        ],
    },
});

PersonSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model('Person', PersonSchema);