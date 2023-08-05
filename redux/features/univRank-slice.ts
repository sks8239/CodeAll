import { Action } from "redux";

export const setUniversityRank = (rankData: any) => {
    return {
        type: "SET_UNIVERSITY_RANK",
        payload: rankData,
    };
};

export interface UnivState {
    universityRank: any[];
}

interface SetUniversityRankAction extends Action<"SET_UNIVERSITY_RANK"> {
    payload: any;
}

type ActionTypes = SetUniversityRankAction;

const initialState: UnivState = {
    universityRank: [],
};

export const univReducer = (
    state: UnivState = initialState,
    action: ActionTypes
): UnivState => {
    switch (action.type) {
        case "SET_UNIVERSITY_RANK":
            return {
                ...state,
                universityRank: action.payload,
            };
        default:
            return state;
    }
};
