import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/todos";

const getAll = async () => {
    const request = await axios.get(baseUrl);
    // console.log("this is todos fetched: ",request.data);
    return request.data;
};

const create = async (newObject) => {
    // console.log("this is todos create newObject i received: ",newObject);
    const request = await axios.post(baseUrl, newObject);
    // console.log("this is todos create response: ",request);
    return request.data;
}

const update = async (id, newObject) => {
    // console.log("this is todos update newObject i received from form submission todo page: ",newObject);
    const request = await axios.put(`${baseUrl}/${id}`, newObject);
    // console.log("this is todos update response from serve: ",request.data);
    return request.data;
}

const remove = async (id) => {
    const request = await axios.delete(`${baseUrl}/${id}`);
    // console.log("this is todos delete response: ",request.data);
    return id;
}

const gettodo = async (id) => {
    const request = await axios.get(`${baseUrl}/${id}`);
    // console.log("this is todos gettodo response: ",request.data);
    return request.data;
}

export default { getAll, create, update, remove, gettodo };