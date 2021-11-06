import Http from '../http/http';
import {Product} from "../components/shared/Table/Table.mockdata";


export const getAllProducts = () =>
    Http.get<Product[]>('http://localhost:3024/products')
        .then(resp => resp.data)
