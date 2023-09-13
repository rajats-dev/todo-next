import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: { todoItem: [] },
  reducers: {
    addTodo(state, action) {
      state.todoItem.push(action.payload);
    },
    retrieveTodo(state, action) {
      state.todoItem = action.payload;
    },
    deleteTodo(state, action) {
      state.todoItem = state.todoItem.filter(
        (item) => item.id !== action.payload
      );
    },
    updateTaskStatus(state, action) {
      const eleExist = state.todoItem.findIndex(
        (item) => item.id == action.payload.id
      );

      let updatedtodoItem = [...state.todoItem];
      let updteEle = { ...action.payload, taskComplete: true };
      updatedtodoItem[eleExist] = updteEle;

      state.todoItem = updatedtodoItem;
    },
  },
});

export const todoAction = TodoSlice.actions;

export default TodoSlice;
