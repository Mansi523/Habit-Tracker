import {configureStore} from "@reduxjs/toolkit";
import { habitReducer } from "./Reducer/habitlist";
export const store = configureStore({
    reducer:{habitReducer}
})