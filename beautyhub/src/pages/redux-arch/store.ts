import { applyMiddleware, legacy_createStore } from "redux";

import { reducer as appreducer } from "./app/reducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
const rootreducer=combineReducers(appreducer)

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

