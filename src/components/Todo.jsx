import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo, removeTodo } from "../reducers/todoSlice";

export default function Todo() {
  const todoID = Number(useParams().id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let tododetails = {};
  // console.log("this is todoID",todoID,"is of type",typeof todoID);
  const temp = useSelector((state) =>
    state.todos.find((todo) => todo.id === todoID)
  );
  // tododetails.concat([temp]);
  // console.log("jai balayya",temp);
  tododetails = { ...temp };
  // console.log("tododetails",tododetails);
  const [todo, setTodo] = useState(tododetails);
  // console.log("todo in state",todo);
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
    // console.log("received from form", todo);
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
      {/* <div>Todo</div>
            <div>{todo.content}</div>
            <div>{todo.completed ? "Yes" : "No"}</div>
            <button onClick={() => navigate(-1)}>Go to Todos</button> */}
    </>
  );
}
