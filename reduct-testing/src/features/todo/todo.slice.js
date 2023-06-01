import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    filter: "all",
    todos: [
      {
        id: Date.now(),
        title: "Test",
        completed: true,
      },
    ],
  },
  reducers: {
    create(state, action) {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        complete: false,
      };
      state.todos.push(newTodo);
    },
    remove(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    clear(state, action) {
      state.todos = [];
    },
    filter(state, action) {
      state.filter = action.payload.filter;
    },
    edit(state, action) {},
    mark(state, action) {
      const todo = state.todos.find((item) => item.id == action.payload.id);
      todo.completed = !todo.completed;
    },
  },
});

const todoReducer = todoSlice.reducer;
export default todoReducer;
export const todoActions = todoSlice.actions;
