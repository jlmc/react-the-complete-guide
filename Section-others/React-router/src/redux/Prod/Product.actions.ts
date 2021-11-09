import {createAsyncThunk} from "@reduxjs/toolkit";
import {Product} from "../../model/Product";
import * as ProductService from "../../service/Products.service";
import {ProductCreator} from "../../model/ProductCreator";
import {AppDispatch} from "../index";

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    // if you type your function argument here
    async (userId: number) => {

        await timeout(2000)

        return await ProductService.getAllProducts()
    }
)

export const insertNewProduct = createAsyncThunk<void, ProductCreator, {dispatch: AppDispatch}>(
    'products/insertNewProduct',
    async (product: ProductCreator, thunkAPI) => {
        await ProductService.createSingleProduct(product)
        thunkAPI.dispatch(fetchAllProducts(999))
    }
)

export const updateExistingProduct = createAsyncThunk<void, ProductCreator, {dispatch: AppDispatch}>(
    'products/updateExistingProduct',
    async (product: Product, thunkAPI) => {
        await ProductService.updateSingleProduct(product)
        thunkAPI.dispatch(fetchAllProducts(999))
    }
)

export const deleteExistingProduct = createAsyncThunk<void, string, {dispatch: AppDispatch}>(
    'products/deleteExistingProduct',
    async (productId: string, thunkAPI) => {
        await ProductService.deleteSingleProduct(productId)
        thunkAPI.dispatch(fetchAllProducts(999))
    }
)
