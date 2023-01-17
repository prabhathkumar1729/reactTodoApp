import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchallTodos, removeTodo } from "../reducers/todoSlice";
import Newtodo from "./Newtodo";
export default function Todoslist() {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todos);
  // useEffect(() => {
  //   if (!isDataFetched) {
  //     dispatch(fetchallTodos());
  //     setIsDataFetched(true);
  //   }
  // }, [isDataFetched]);
  // useEffect(() => {
  //   if(!isDataFetched)
  //   {
  //     dispatch(fetchallTodos());
  //     setIsDataFetched(true);
  //   }

  // },[isDataFetched]);
  // const todo = useSelector((state) => state.todos);
  // console.log("Todoslist bugga", ab.todos);
  return (
    <>
      <Newtodo />
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todo.length === 0 && <tr><td colSpan={3}>Empty</td></tr>}
          {todo.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.content}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>
                <Link to={`/todos/${todo.id}`}>Edit</Link>
                <button
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
