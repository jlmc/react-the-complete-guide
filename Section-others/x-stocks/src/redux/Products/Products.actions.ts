import {Action} from "./Products.reducer";
import {Product} from "../../model/Product";

// 2. create redux actions
export const insertNewProduct = (): Action<Product> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: {
            _id: '2345',
            name: 'Dummy product',
            price: 10.5,
            stock: 3,
            createAt: undefined,
            updatedAt: undefined
        }
    }
}
