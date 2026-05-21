import axios from "axios";

const baseUrl = '/api/persons';
const resourceUrl = (id) => `${baseUrl}/${id}`;

const getAllPersons = () => {
    return axios.get(baseUrl).then((response) => response.data);
};
const createPerson = (newObject) =>
    axios.post(baseUrl, newObject).then((response) => response.data);

const deletePerson = (personId) => axios.delete(baseUrl, personId).then(response => response.data);

const updatePerson = (id, updatedObject) =>
    axios.put(resourceUrl(id), updatedObject).then((response) => response.data);

export default {getAllPersons, createPerson, deletePerson, updatePerson};