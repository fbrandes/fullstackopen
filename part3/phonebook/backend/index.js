const express = require('express');
const Person = require('./model/person');

const app = express();

app.use(express.static('./dist'));
// app.use(cors());

app.use(express.json());

app.get('/api/persons', (req, res, next) => {
    Person.find()
        .then((persons) => res.json(persons))
        .catch((err) => next(err));
});