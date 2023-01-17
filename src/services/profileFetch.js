import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/profile";

const getProfile = async () => {
    const request = await axios.get(baseUrl).then(response => response);
    return request.data[0];
};

const editProfile = async (newObject) => {
    const request = await axios.put(baseUrl + "/" + newObject.id, newObject).then(response => response);
    return request.data;
};

export default { getProfile, editProfile };