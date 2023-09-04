"use client"

import {store} from './store'
import {Provider} from "react-redux";
import React from "react";
import {PersistGate} from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';
export function ReduxProvider({children}: {children:React.ReactNode}){
    let persist = persistStore(store)
    return (
        <Provider store={store}>
            {/*<PersistGate loading={null} persistor={persist}>*/}
                {children}
            {/*</PersistGate>*/}
        </Provider>
    );
}