import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchallTodos, removeTodo } from "../reducers/todoSlice";
import Newtodo from "./Newtodo";
import "../styles/todolist.css";
import {RiDeleteBin2Fill} from "react-icons/ri";
import {FiEdit} from "react-icons/fi";
export default function Todoslist() {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todos);
  function getRowColor(completed) {
    if(completed) {
      return "green"
    } else {
      return "red"
    }
  }
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
          {todo.length === 0 && <tr><td colSpan={3}>Empty</td></tr>}
          {todo.map((todo, index) => (
            <tr key={index}style={{backgroundColor: getRowColor(todo.completed)}}>
              <td>{index + 1}</td>
              <td>{todo.content}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>
                <Link to={`/todos/${todo.id}`}><FiEdit/></Link>
                
                {/* <button
                  
                >
                  Delete
                </button> */}
                <RiDeleteBin2Fill className="deleteicon" onClick={() => {
                    dispatch(removeTodo(todo.id));
                  }}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
