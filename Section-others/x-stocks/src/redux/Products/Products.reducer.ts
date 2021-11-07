import Products from "../../components/shared/Table/Table.mockdata";

export interface Action<T = any> {
    type: string,
    payload?: T
}

// 1. first we create the redux reducer
export default function (state = Products, action: Action) {
    switch (action.type) {

        case 'INSERT_NEW_PRODUCT':
            return [...state, action.payload]
        default:
            return state
    }
}
