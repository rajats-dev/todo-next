import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./todo-slice";

const store = configureStore({
  reducer: { todo: TodoSlice.reducer },
});

export default store;
