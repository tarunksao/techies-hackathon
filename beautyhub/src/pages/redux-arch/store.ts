import { applyMiddleware, legacy_createStore } from "redux";

import { Reducer as appreducer } from "./app/reducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {useDispatch, TypedUseSelectorHook,useSelector}from "react-redux"
const rootreducer=combineReducers({appreducer})

 type RootState=ReturnType<typeof store.getState> 
export default RootState
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

export type AppDispatch=typeof store.dispatch;

type Dispatchfn=()=>AppDispatch;

export const useAppDispatch:Dispatchfn=useDispatch;

export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;