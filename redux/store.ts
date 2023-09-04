import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "@/redux/rootReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import persistedReducer from "@/redux/rootReducer";


export const store = configureStore({
    // reducer: persistedReducer,
    reducer: rootReducer,
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;