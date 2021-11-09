import {createAsyncThunk} from "@reduxjs/toolkit";
import {signInUser, User} from "../../service/Authentication.service";
import {AppDispatch} from "../index";


export interface Credentials {
    username: string
    pass: string
}


export const signIn = createAsyncThunk<User, Credentials, { dispatch: AppDispatch }>(
    'authentication/signIn',
    // if you type your function argument here
    async (credentials: Credentials) => {

        //await timeout(2000)

        return await signInUser(credentials.username, credentials.pass)
    }
)


/*
export const insertNewProduct = createAsyncThunk<void, ProductCreator, {dispatch: AppDispatch}>(
    'products/insertNewProduct',
    async (product: ProductCreator, thunkAPI) => {
        await ProductService.createSingleProduct(product)
        thunkAPI.dispatch(fetchAllProducts(999))
    }
)
 */
