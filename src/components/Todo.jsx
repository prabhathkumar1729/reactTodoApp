import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo, removeTodo } from "../reducers/todoSlice";
export default function Todo() {
  const todoID = Number(useParams().id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let tododetails = {};
  const temp = useSelector((state) =>
    state.todos.find((todo) => todo.id === todoID)
  );
  tododetails = { ...temp };
  const [todo, setTodo] = useState(tododetails);
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckbox = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.checked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeTodo(todo));
    navigate(-1);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeTodo(todoID));
    navigate(-1);
  };

  return (
    <>
      <div className="addtodo_container">
        <form onSubmit={handleSubmit}>
          <label>
            Content:
            <input
              type="text"
              name="content"
              defaultValue={todo.content}
              placeholder={todo.content}
              onChange={handleChange}
            />
          </label>
          <label>
            Completed:
            <input
              type="checkbox"
              name="completed"
              onChange={handleCheckbox}
              checked={todo.completed}
            />
          </label>
          <button type="submit">Save</button>
          <button onClick={handleDelete}>Delete</button>
        </form>
      </div>
    </>
  );
}
