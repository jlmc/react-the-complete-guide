import Products from "../../components/shared/Table/Table.mockdata";
import {Product} from "../../model/Product";
import {GET_PRODUCTS } from "./Products.actions";
import {Action} from "../index";

// 1. first we create the redux reducer
export default function (state: Product[] = Products, action: Action): Product[] {
    switch (action.type) {

        case GET_PRODUCTS:
            const ps = action.payload as Product[]
            return [...ps]

        /*
        case INSERT_NEW_PRODUCT:

            let newProduct = {
                ...action.payload, _id: String(uuid())
            }

            return [...state, newProduct]
        case UPDATE_EXISTING_PRODUCT:

            const payload2 = action.payload as Product;
            const existing: Product | undefined = state.find(it => (it._id && it._id === payload2._id));
            if (existing) {
                existing.name = payload2.name
                existing.stock = payload2.stock
                existing.price = payload2.price
            }

            return state.map(it => it);

        case DELETE_EXISTING_PRODUCT:

            const productId = action.payload as string;

            return state.filter(it => it._id !== productId);

         */
        default:
            return state
    }
}
