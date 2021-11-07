import axios from "axios";

// create a new Instance of axios, using a preconfigured configs that we can have
const Http = axios.create({
    baseURL: 'http://localhost:3024',
    headers: {
        authorization: 'Bearer 123'
    }
})

export default Http
