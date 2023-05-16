import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearItem: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    clearAll: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.completed !== action.payload.completed
      );
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: action.payload.completed };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, clearAll, clearItem, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
