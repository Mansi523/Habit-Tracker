// imported configureStore from rdeux toolkit
import { configureStore } from "@reduxjs/toolkit";
// imported habitReducer.
import { habitReducer } from "./Reducer/habitlist";
// exported configureStore
export const store = configureStore({
  reducer: { habitReducer },
});
