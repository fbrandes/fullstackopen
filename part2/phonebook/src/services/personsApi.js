import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => axios.get(baseUrl).then((response) => response.data);

const createPerson = (newObject) =>
    axios.post(baseUrl, newObject).then((response) => response.data);

const deletePerson = (personId) => axios.delete(baseUrl, personId).then(response => response.data);

export default {getAllPersons, createPerson, deletePerson};