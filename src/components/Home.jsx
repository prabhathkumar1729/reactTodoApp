import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchallTodos, removeTodo } from "../reducers/todoSlice";
import { fetchProfile } from "../reducers/profileSlice";
import Hometodo from "./Hometodo";
import "../styles/homepage.css";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchallTodos());
  }, [dispatch]);

  const name = useSelector((state) => state.profile.profile.name);
  const todos = useSelector((state) => state.todos);
  // console.log("Bahubali  ",name);
  // console.log("todos in home todo",todos);
  return (
    <>
      <div className="greeting">
        <h1>
          Hello <span className="username">{name}</span>
        </h1>
      </div>
      <div>This is your Todo list</div>
      <Hometodo todos={{ todos }} />
      <div className="homepage"></div>
    </>
  );
}
