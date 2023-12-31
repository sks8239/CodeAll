import { combineReducers } from 'redux';
import { loginReducer, LoginState } from './features/login-slice';
import {studyReducer, StudyState} from "@/redux/features/study-slice";
import {quizReducer, QuizState} from "@/redux/features/quiz-slice";
import {interviewReducer, InterviewState} from "@/redux/features/interview-slice";
import {univReducer, UnivState} from "@/redux/features/univRank-slice";
import {individualReducer, IndividualState} from "@/redux/features/individualRank-slice";
import {signUpReducer, SignUpState} from "@/redux/features/signUp-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
export interface RootState {
    quiz: QuizState;
    interview: InterviewState;
    login: LoginState;
    signUp: SignUpState;
    study : StudyState;
    univ : UnivState;
    individual : IndividualState;

}

const rootReducer = combineReducers({
    quiz: quizReducer,
    interview: interviewReducer,
    login: loginReducer,
    signUp: signUpReducer,
    study: studyReducer,
    univ: univReducer,
    individual: individualReducer
});
// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist:['login']
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// export default persistedReducer;
export default rootReducer