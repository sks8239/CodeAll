import { Action } from 'redux';


// 문제 타입
export interface Like {
    interviewId : string;
    userId : string;

}
//액션타입
export interface LikeCnt extends Action {
    type: 'LikeCntPlus';
    payload: Like[];
}
