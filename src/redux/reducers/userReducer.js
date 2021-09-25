import { USER } from "../constants/userConstants";

const initialState = {
    products: [
        {
            id: 1,
            title: 'Dipesh',
            category: "programmer",
        }
    ]
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER.LIST_USER_START:
            return {
                ...state,
                isLoading: true,
                error: null,
                data: [],
                action: action.type
            };
        case USER.LIST_USER_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        case USER.LIST_USER_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
            };
    }
}