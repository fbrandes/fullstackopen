import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newOne) => {
  token = `Bearer ${newOne}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createBlog = async (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const request = await axios.post(baseUrl, newObject, config);

  return request.data;
};

const updateBlog = async (id, newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const request = await axios.put(`${baseUrl}/${id}`, newObject, config);

  return request.data;
};

const deleteBlog = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  await axios.delete(`${baseUrl}/${id}`, config);
};

export default { getAll, create: createBlog, update: updateBlog, remove: deleteBlog, setToken };
