import {Dispatch} from "redux";
import {SetShowContentAction} from "@/redux/features/interview-slice";

export interface LoginState {
    isLoading: boolean;
    error: string | null;
    accessToken: string;
    refreshToken: string;
    currentUserNickName : string;
}

const initialState: LoginState = {
    isLoading: false,
    error: null,
    accessToken: "",
    refreshToken: "",
    currentUserNickName : ""
};

export interface LoginUserAction {
    type: "LOGIN_USER";
}

export interface LoginUserSuccessAction {
    type: "LOGIN_USER_SUCCESS";
    payload: {
        accessToken: string;
        refreshToken: string;
        currentUserNickName: string;
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
export const setShowContent = (
    index: number,
    show: boolean
): SetShowContentAction => {
    return {
        type: "SET_SHOW_CONTENT",
        payload: {
            index,
            show,
        },
    };
};
export const setLoginUserSuccess = (
    accessToken: string, refreshToken: string, currentUserNickName: string) =>{
    return{
        type : "LOGIN_USER_SUCCESS",
        payload:{
            accessToken,
            refreshToken,
            currentUserNickName
        }
    }
}


export const loginReducer = (state = initialState, action: ActionTypes): LoginState => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "LOGIN_USER_SUCCESS":
            const { accessToken, refreshToken, currentUserNickName } = (action as LoginUserSuccessAction).payload;
            return {
                ...state,
                accessToken,
                refreshToken,
                currentUserNickName
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
                currentUserNickName : "",
            };
        default:
            return state;
    }
};
