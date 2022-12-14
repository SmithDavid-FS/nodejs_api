const axios = require("axios");
require("dotenv").config();

const todoService = async () => {
    console.log(`Real Todos`);
    return await axios.get(`${process.env.todosURL}`);
};

const todoServicebyId = async (id) => {
    console.log("Real todos by id");
    return await axios.get(`${process.env.todosURL}${id}`);
};

module.exports = {todoService, todoServicebyId};