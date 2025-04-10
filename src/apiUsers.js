/*
- Usefull preconfigured parameters and functions for HTTP requests
- Automatic transform when getting json data
- Automatic object data serialization multipart/form-data and x-www-form-urlencoded 
when posting json data
*/

import axios from "axios";
const BASE_URL = "https://json-server-cepl.onrender.com";
const BASE_URL2 = "https://movieapi-koqu.onrender.com";

export const fetchUsers = async () => {
    const users = await axios.get(BASE_URL2+"/users")
    .then(response =>{return response.data})
    .catch(error => {return error});
    return users;
}

export const createUsers = async (formData) => {
    const user = await axios.post(BASE_URL2+"/users", formData)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return user;
}

export const loginUser = async (formData) => {
    const user = await axios.post(BASE_URL2+"/login", formData)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return user;
}

export const deleteUser = async (id) => {
    const users = await axios.delete(BASE_URL2+"/users/"+id)
    .then(response =>{return response.data})
    .catch(error => {return error});
    return users;
}