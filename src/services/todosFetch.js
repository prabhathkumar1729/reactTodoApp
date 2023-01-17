import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/todos";

const getAll = async () => {
    const request = await axios.get(baseUrl);
    return request.data;
};

const create = async (newObject) => {
    const request = await axios.post(baseUrl, newObject);
    return request.data;
}

const update = async (id, newObject) => {
    const request = await axios.put(`${baseUrl}/${id}`, newObject);
    return request.data;
}

const remove = async (id) => {
    const request = await axios.delete(`${baseUrl}/${id}`);
    return id;
}

const gettodo = async (id) => {
    const request = await axios.get(`${baseUrl}/${id}`);
    return request.data;
}

export default { getAll, create, update, remove, gettodo };