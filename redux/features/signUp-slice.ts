import { Dispatch } from 'redux';

interface UserData {
    id: string;
    password: string;
    confirmPassword: string;
    name: string;
    school: string;
    email: string;
    phone: string;
}

export interface SignUpState {
    isLoading: boolean;
    error: string | null;
    selectedUniversity: string | null;
}

const initialState: SignUpState = {
    isLoading: false,
    error: null,
    selectedUniversity: null,
};

export interface SignUpUserAction {
    type: "SIGNUP_USER";
}

export interface SignUpUserSuccessAction {
    type: "SIGNUP_USER_SUCCESS";
}

export interface SignUpUserFailureAction {
    type: "SIGNUP_USER_FAILURE";
    payload: string;
}
export interface SetSelectedUniversityAction {
    type: "SET_SELECTED_UNIVERSITY";
    payload: string; // universityName
}
export type ActionTypes =
    | SignUpUserAction
    | SignUpUserSuccessAction
    | SignUpUserFailureAction
    | SetSelectedUniversityAction;
export const setSelectedUniversity = (universityName: string): SetSelectedUniversityAction => ({
    type: "SET_SELECTED_UNIVERSITY",
    payload: universityName,
});

export const signUpReducer = (
    state = initialState,
    action: ActionTypes
): SignUpState => {
    switch (action.type) {
        case "SIGNUP_USER":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "SIGNUP_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
            };
        case "SIGNUP_USER_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case "SET_SELECTED_UNIVERSITY":
            return {
                ...state,
                selectedUniversity: action.payload,
            };
        default:
            return state;
    }
};
