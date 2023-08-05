import { Action } from "redux";

export interface IndividualState {
    individualRank: any[];
}

interface SetIndividualRankAction extends Action<"SET_INDIVIDUAL_RANK"> {
    payload: any[];
}

export type ActionTypes = SetIndividualRankAction;

const initialState: IndividualState = {
    individualRank: [],
};

export const setIndividualRank = (rankData: any) => {
    return {
        type: "SET_INDIVIDUAL_RANK",
        payload: rankData,
    };
};

export const individualReducer = (
    state: IndividualState = initialState,
    action: ActionTypes
): IndividualState => {
    switch (action.type) {
        case "SET_INDIVIDUAL_RANK":
            return {
                ...state,
                individualRank: action.payload,
            };
        default:
            return state;
    }
};
