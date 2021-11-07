import Products from "../../components/shared/Table/Table.mockdata";
import {Product} from "../../model/Product";
import {uuid} from "../../utils";

export interface Action<T = any> {
    type: string,
    payload?: T
}

// 1. first we create the redux reducer
export default function (state = Products, action: Action): Product[] {
    switch (action.type) {

        case 'INSERT_NEW_PRODUCT':

            let newState = {
            ...action.payload, _id: String(uuid())
            }

            return [...state, newState]
        default:
            return state
    }
}
