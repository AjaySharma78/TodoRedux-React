import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const Upchar = (text) => {
    const words = text.charAt(0).toUpperCase() + text.slice(1);
    return words;
  };

  return (
    <>
      <div className="text-4xl mt-10 text-zinc-400"> Todos List</div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <div
              className={`${todo.completed ? "line-through" : ""} text-white`}
            >
              {Upchar(todo.text)}
            </div>

            <div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 mr-2 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  dispatch(
                    updateTodo({ id: todo.id, text: todo.text || todo.text })
                  )
                }
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
