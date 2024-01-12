import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";

async function register({name, dob, email, username, password}) {
    return await axios.post(BASE_URL+"user/register", {
        name, dob, email, username, password
    })
}

async function login({username, password}) {
    return await axios.post(BASE_URL+"user/login", {
        username, password
    })
}

export {register, login}