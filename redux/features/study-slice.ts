// studyActionTypes.ts

export const SET_SELECTED_LANGUAGE = "SET_SELECTED_LANGUAGE";
export const SET_LANGUAGE_DATA = "SET_LANGUAGE_DATA";

export interface SetSelectedLanguageAction {
    type: typeof SET_SELECTED_LANGUAGE;
    payload: string;
}

export interface SetLanguageDataAction {
    type: typeof SET_LANGUAGE_DATA;
    payload: {
        language: string;
        content: string[];
        answersId: string[];
        example : string[],
        explanations: string[];
        studyIds: number[];
    };
}

export type StudyActionTypes = SetSelectedLanguageAction | SetLanguageDataAction;


export const setSelectedLanguage = (
    language: string
): StudyActionTypes => {
    return {
        type: SET_SELECTED_LANGUAGE,
        payload: language,
    };
};

export const setLanguageData = (
    language: string,
    content: string[],
    answersId: string[],
    example:string[],
    explanations: string[],
    studyIds: number[]
): StudyActionTypes => {
    return {
        type: SET_LANGUAGE_DATA,
        payload: {
            language,
            content,
            answersId,
            example,
            explanations,
            studyIds,
        },
    };
};

export interface StudyState {
    selectedLanguage: string;
    languageData: {
        [language: string]: {
            content: string[];
            answers: string[];
            example: string[];
            explanations: string[];
            studyIds: number[];
        };
    };
}

const initialState: StudyState = {
    selectedLanguage: "",
    languageData: {},
};

export const studyReducer = (
    state = initialState,
    action: StudyActionTypes
): StudyState => {
    switch (action.type) {
        case SET_SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload,
            };
        case SET_LANGUAGE_DATA:
            return {
                ...state,
                languageData: {
                    ...state.languageData,
                    [action.payload.language]: {
                        content: action.payload.content,
                        answers: action.payload.answersId,
                        example: action.payload.example,
                        explanations: action.payload.explanations,
                        studyIds: action.payload.studyIds,
                    },
                },
            };
        default:
            return state;
    }
};

export default studyReducer;