import Products from "../../components/shared/Table/Table.mockdata";
import {Product} from "../../model/Product";
import {uuid} from "../../utils";
import {
    DELETE_EXISTING_PRODUCT,
    deleteExistingProduct,
    INSERT_NEW_PRODUCT,
    UPDATE_EXISTING_PRODUCT
} from "./Products.actions";

export interface Action<T = any> {
    type: string,
    payload?: T
}

// 1. first we create the redux reducer
export default function (state: Product[] = Products, action: Action): Product[] {
    switch (action.type) {

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

        default:
            return state
    }
}
