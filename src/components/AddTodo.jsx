import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setTodos } from "../features/todo/todoSlice";

function AddTodo() {
  const todo = useSelector((state) => state.msg);
  const todosFromRedux = useSelector((state) => state.todos);
  const [inputs, setInput] = useState("");
  const [isTodoExist, setIsTodoExist] = useState(false);
  const [message, setMessage] = useState("Welcome");
  const dispatch = useDispatch();

  useEffect(() => {
    setInput(todo.text||"");
    setIsTodoExist(!!todo.text);
  }, [todo]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputs) return setMessage("Please enter your todo");
    dispatch(addTodo(inputs));
    setInput("");
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id: todo.id, text: inputs }));
    setInput("");
  };

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
    if (todosFromLocalStorage && todosFromLocalStorage.length > 0) {
      dispatch(setTodos(todosFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosFromRedux));
  }, [todosFromRedux]);

  return (
    <form
      className="space-x-3 mt-8"
      onSubmit={isTodoExist ? handleUpdateTodo : handleAddTodo}
    >
      <p className="text-white">{message}</p>

      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={inputs}
        onChange={(e) => {setInput(e.target.value)}}
      />
      <button
        type="submit"
        className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
      >
        {isTodoExist ? "Save" : "AddTodo"}
      </button>
    </form>
  );
}

export default AddTodo;
