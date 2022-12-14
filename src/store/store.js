import { configureStore} from "@reduxjs/toolkit";
import useSlice from "../redux/reducer/useSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer,persistStore} from 'redux-persist';
import thunk from "redux-thunk";
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
//import persistReducer from "redux-persist/es/persistReducer";
const PersistConfig={
    key:'root',
    storage,
   
}
const persistedReducer = persistReducer(PersistConfig,useSlice)


export const store = configureStore(
    {
        reducer:persistedReducer,
        middleware: [thunk]
    }
);
export const persistor = persistStore(store)