import {ProductCreator} from "../../model/ProductCreator";
import {Product} from "../../model/Product";
import {getAllProducts} from "../../service/Products.service";
import {Action, Thunk} from "../index";

export const GET_PRODUCTS = "GET_PRODUCTS"
export const INSERT_NEW_PRODUCT = "INSERT_NEW_PRODUCT"
export const UPDATE_EXISTING_PRODUCT = "UPDATE_EXISTING_PRODUCT"
export const DELETE_EXISTING_PRODUCT = "DELETE_EXISTING_PRODUCT"


export const getProducts = (): Thunk<Product[]> => async (dispatch) => {
    const ps: Product[] = await getAllProducts()

    dispatch({
        type: GET_PRODUCTS,
        payload: ps
    });
}

// 2. create redux actions
export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
    return {
        type: INSERT_NEW_PRODUCT,
        payload: payload
    }
}

export const updateExistingProduct = (payload: Product): Action<Product> => {
    return {
        type: UPDATE_EXISTING_PRODUCT,
        payload: payload
    }
}

export const deleteExistingProduct = (payload: string): Action<string> => {
    return {
        type: DELETE_EXISTING_PRODUCT,
        payload: payload
    }
}
