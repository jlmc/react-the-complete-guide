import {Action} from "./Products.reducer";
import {ProductCreator} from "../../model/ProductCreator";

// 2. create redux actions
export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: payload
    }
}
