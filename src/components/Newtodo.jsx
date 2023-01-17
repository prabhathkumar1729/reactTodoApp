import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addnewTodo } from "../reducers/todoSlice";
import "../styles/addnewtodo.css";
export default function Newtodo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todo.value;
    dispatch(
      addnewTodo({
        content: todo,
        completed: false,
      })
    );
    e.target.elements.todo.value = "";
    navigate("/todos");
  };
  return (
    <div className="addtodo_container">
      <form onSubmit={addTodo}>
        <input type="text" name="todo" placeholder="Enter todo here" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
