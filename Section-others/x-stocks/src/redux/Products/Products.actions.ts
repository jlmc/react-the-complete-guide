import {ProductCreator} from "../../model/ProductCreator";
import {Product} from "../../model/Product";
import * as ProductService from "../../service/Products.service";
import {Thunk} from "../index";

export const GET_PRODUCTS = "GET_PRODUCTS"
//export const INSERT_NEW_PRODUCT = "INSERT_NEW_PRODUCT"
//export const UPDATE_EXISTING_PRODUCT = "UPDATE_EXISTING_PRODUCT"
//export const DELETE_EXISTING_PRODUCT = "DELETE_EXISTING_PRODUCT"


export const getProducts = (): Thunk<Product[]> =>
    async (dispatch) => {
        const ps: Product[] = await ProductService.getAllProducts()

        dispatch({
            type: GET_PRODUCTS,
            payload: ps
        });
    }

export const insertNewProduct =
    (product: ProductCreator): Thunk =>
        async (dispatch) => {
            await ProductService.createSingleProduct(product)
            dispatch(getProducts())
        }

export const updateExistingProduct =
    (product: Product): Thunk =>
        async (dispatch) => {
            await ProductService.updateSingleProduct(product)
            dispatch(getProducts())
        }


export const deleteExistingProduct =
    (productId: string): Thunk =>
        async (dispatch) => {
            await ProductService.deleteSingleProduct(productId)
            dispatch(getProducts())
        }
