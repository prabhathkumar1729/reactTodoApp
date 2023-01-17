import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../reducers/todoSlice";
import Newtodo from "./Newtodo";
import "../styles/todolist.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
export default function Todoslist() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);
  function getRowColor(completed) {
    if (completed) {
      return "green";
    } else {
      return "red";
    }
  }
  return (
    <>
      <Newtodo />
      <div className="container">
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
            {todo.length === 0 && (
              <tr>
                <td colSpan={4}>Empty</td>
              </tr>
            )}
            {todo.map((todo, index) => (
              <tr
                key={index}
                style={{ backgroundColor: getRowColor(todo.completed) }}
              >
                <td>{index + 1}</td>
                <td>{todo.content}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <div className="edit-delete">
                    <Link to={`/todos/${todo.id}`}>
                      <FiEdit />
                    </Link>

                    <RiDeleteBin2Fill
                      className="deleteicon"
                      onClick={() => {
                        dispatch(removeTodo(todo.id));
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
