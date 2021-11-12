import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../model/Product";
import {fetchAllProducts} from "./Product.actions";

export const IDLE = 'idle'
export const PENDING = 'pending'
export const SUCCEEDED = 'succeeded'
export const FAILED = 'failed'

export interface ProductsState {
    entities: Product[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    errorMessage?: string
}

const initialState = {
    entities: [],
    loading: 'idle',
    errorMessage: undefined
} as ProductsState

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fill in primary logic here

        receivedProducts(state, action: PayloadAction<Product[]>) {
            const products = action.payload;

            /*
            products.forEach(product => {
                state.products[product.id] = product;
            })
             */
            state.entities = products
            state.loading = SUCCEEDED
        },

        incrementStock(state, action: PayloadAction<number>) {
            const incrementValue = action.payload;

            const tempProducts: Product[] = state.entities.map(it => {
                return {...it} as Product
            })
            tempProducts.forEach((item: Product, index: number) => item.stock = item.stock + incrementValue)

            state.entities = tempProducts
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
            state.loading = PENDING
            state.entities = []
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, {payload}) => {
            state.entities = payload
            state.loading = SUCCEEDED
        });
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.entities = []
            state.errorMessage = action.error.message || ""
            state.loading = FAILED
        });
    },
})

export const productSliceActions = productSlice.actions;

export default productSlice;
