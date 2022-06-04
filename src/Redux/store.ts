import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TodosSlice from "./TodosSlice";


const store=configureStore({
    reducer:{
        todos:TodosSlice
    },
   /* middleware:(getDefaultMiddleware:any) => getDefaultMiddleware({
        serializableCheck: false
      }),*/

})
//window.store=store
export default store
 export type RootState=ReturnType<typeof store.getState>
 export type AppDispatch = typeof store.dispatch
 
 