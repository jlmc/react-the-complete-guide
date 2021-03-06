import axios from "axios";
import {RootState} from "../redux";

const { REACT_APP_API_GW_URL } = process.env

let rootState: RootState
export const injectStore = (_rootState: RootState) => {
    rootState = _rootState
}

// create a new Instance of axios, using a preconfigured configs that we can have
// https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
const Http = axios.create({
    baseURL: REACT_APP_API_GW_URL,
    /*
    baseURL: REACT_APP_API_GW_URL ? REACT_APP_API_GW_URL : 'http://localhost:3024',
    baseURL: 'http://localhost:3024',
    headers: {
        Authorization: 'Bearer 123'
    }
    */
})

Http.interceptors.request.use(config => {
    let accessToken = ''
    if (rootState) {
        accessToken = rootState.authentication.user?.jwtToken || ''
    }

    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
        },
    };
})

export default Http
