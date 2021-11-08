import Http from '../http/http';
import {Product} from "../model/Product";
import {ProductCreator} from "../model/ProductCreator";


export const getAllProducts = (): Promise<Product[]> =>
    Http.get<Product[]>('/products')
        .then(resp => resp.data)

export const createSingleProduct = (productCreator: ProductCreator): Promise<void> => {
    return Http.post(
        '/products',
        productCreator
    )
}

export const deleteSingleProduct = (id: string) =>
    Http.delete(`/products/${id}`)


export const updateSingleProduct = ({_id, name, price, stock}: Product) =>
    Http
        //.patch(`http://localhost:3024/products/${_id}`, {
        .patch(`/products/${_id}`, {
            ...(name && {name}),
            ...(price && {price}),
            ...(stock && {stock}),
        })
