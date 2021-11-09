import axios from "axios";

// create a new Instance of axios, using a preconfigured configs that we can have
const Http = axios.create({
    baseURL: 'http://localhost:3024',
    /*
    headers: {
        Authorization: 'Bearer 123'
    }
     */
})

Http.interceptors.request.use(config => {
    console.log(`JWT-0:`)
    const accessToken = 'MY-DUMMY'

    //const useAppSelector1  = useAppSelector(getJwtToken);

    console.log(`JWT-1:`)

    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
        },
    };
})

export default Http
