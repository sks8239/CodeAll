export interface InterviewState {
    languageContent: string[];
    languageComment: string[][];
    exampleComment: string[];
    activeLanguage: string;
    showContent: boolean[];
    currentPage: number;
    interviewIds: number[];
    selectedInterviewIds: number[];
}

const initialState: InterviewState = {
    languageContent: [],
    languageComment: [],
    exampleComment: [],
    activeLanguage: "",
    showContent: [],
    currentPage: 1,
    interviewIds: [],
    selectedInterviewIds: [],
};

export interface SetLanguageContentAction {
    type: "SET_LANGUAGE_CONTENT";
    payload: string[];
}

export interface SetLanguageCommentAction {
    type: "SET_LANGUAGE_COMMENT";
    payload: string[][];
}

export interface SetExampleCommentAction {
    type: "SET_EXAMPLE_COMMENT";
    payload: string[];
}

export interface SetInterviewIdsAction {
    type: "SET_INTERVIEW_IDS";
    payload: number[];
}

export interface SetActiveLanguageAction {
    type: "SET_ACTIVE_LANGUAGE";
    payload: string;
}

export interface SetShowContentAction {
    type: "SET_SHOW_CONTENT";
    payload: {
        index: number;
        show: boolean;
    };
}

export interface SetCurrentPageAction {
    type: "SET_CURRENT_PAGE";
    payload: number;
}

export interface ToggleSelectedInterviewIdAction {
    type: "TOGGLE_SELECTED_INTERVIEW_ID";
    payload: number;
}

export type ActionTypes =
    | SetLanguageContentAction
    | SetLanguageCommentAction
    | SetExampleCommentAction
    | SetActiveLanguageAction
    | SetShowContentAction
    | SetCurrentPageAction
    | SetInterviewIdsAction
    | ToggleSelectedInterviewIdAction;

export const setLanguageContent = (
    content: string[]
): SetLanguageContentAction => {
    return {
        type: "SET_LANGUAGE_CONTENT",
        payload: content,
    };
};

export const setLanguageComment = (
    comment: string[][]
): SetLanguageCommentAction => {
    return {
        type: "SET_LANGUAGE_COMMENT",
        payload: comment,
    };
};

export const setExampleComment = (
    example: string[]
): SetExampleCommentAction => {
    return {
        type: "SET_EXAMPLE_COMMENT",
        payload: example,
    };
};

export const setInterviewIds = (
    interviewIds: number[]
): SetInterviewIdsAction => {
    return {
        type: "SET_INTERVIEW_IDS",
        payload: interviewIds,
    };
};

export const setActiveLanguage = (
    language: string
): SetActiveLanguageAction => {
    return {
        type: "SET_ACTIVE_LANGUAGE",
        payload: language,
    };
};

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

export const setCurrentPage = (
    page: number
): SetCurrentPageAction => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: page,
    };
};

export const toggleSelectedInterviewId = (
    interviewId: number
): ToggleSelectedInterviewIdAction => {
    return {
        type: "TOGGLE_SELECTED_INTERVIEW_ID",
        payload: interviewId,
    };
};

export const interviewReducer = (
    state = initialState,
    action: ActionTypes
): InterviewState => {
    switch (action.type) {
        case "SET_LANGUAGE_CONTENT":
            return {
                ...state,
                languageContent: action.payload,
            };
        case "SET_LANGUAGE_COMMENT":
            return {
                ...state,
                languageComment: action.payload,
            };
        case "SET_EXAMPLE_COMMENT":
            return {
                ...state,
                exampleComment: action.payload,
            };
        case "SET_ACTIVE_LANGUAGE":
            return {
                ...state,
                activeLanguage: action.payload,
            };
        case "SET_SHOW_CONTENT":
            const { index, show } = action.payload;
            const updatedShowContent = [...state.showContent];
            updatedShowContent[index] = show;
            return {
                ...state,
                showContent: updatedShowContent,
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload,
            };
        case "SET_INTERVIEW_IDS":
            return {
                ...state,
                interviewIds: action.payload,
            };
        case "TOGGLE_SELECTED_INTERVIEW_ID":
            const interviewId = action.payload;
            const selectedInterviewIds = state.selectedInterviewIds.includes(
                interviewId
            )
                ? state.selectedInterviewIds.filter((id) => id !== interviewId)
                : [...state.selectedInterviewIds, interviewId];
            return {
                ...state,
                selectedInterviewIds,
            };
        default:
            return state;
    }
};
