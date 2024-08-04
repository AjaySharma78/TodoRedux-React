import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  msg: "",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.filter((todo) => {
        if (todo.id == action.payload.id) {
          todo.text = action.payload.text;
          state.msg = action.payload;
        }
      });
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setTodos, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
