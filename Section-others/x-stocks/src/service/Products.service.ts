import Http from '../http/http';
import {Product} from "../model/Product";


export const getAllProducts = () =>
    Http.get<Product[]>('http://localhost:3024/products')
        .then(resp => resp.data)
