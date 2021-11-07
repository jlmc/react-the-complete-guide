export interface Action<T = any> {
    type: string,
    payload?: T
}

// 1. first we create the redux reducer
export default function (state = [], action: Action) {
    switch (action.type) {

        case 'INSERT_NEW_PRODUCT':
            return [...state, action.payload]
        default:
            return state
    }
}
