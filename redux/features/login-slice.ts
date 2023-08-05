import {Dispatch} from "redux";

export interface LoginState {
    isLoading: boolean;
    error: string | null;
    accessToken: string;
    refreshToken: string;
}

const initialState: LoginState = {
    isLoading: false,
    error: null,
    accessToken: "",
    refreshToken: ""
};

export interface LoginUserAction {
    type: "LOGIN_USER";
}

export interface LoginUserSuccessAction {
    type: "LOGIN_USER_SUCCESS";
    payload: {
        accessToken: string;
        refreshToken: string;
    };
}
export interface LogoutAction {
    type: "LOGOUT";
}
export interface LoginUserFailureAction {
    type: "LOGIN_USER_FAILURE";
    payload: string;
}

export type ActionTypes =
    | LoginUserAction
    | LoginUserSuccessAction
    | LoginUserFailureAction
    | LogoutAction;



export const loginReducer = (state = initialState, action: ActionTypes): LoginState => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "LOGIN_USER_SUCCESS":
            const { accessToken, refreshToken } = (action as LoginUserSuccessAction).payload;
            return {
                ...state,
                accessToken,
                refreshToken,
            };
        case "LOGIN_USER_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                accessToken: "",
                refreshToken: "",
            };
        default:
            return state;
    }
};
