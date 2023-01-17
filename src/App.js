import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Profilecard from "./components/Profilecard";
import Todoslist from "./components/Todoslist";
import Newtodo from "./components/Newtodo";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profilecard />} />
        <Route path="/todos" element={<Todoslist />} />
        <Route path="/newtodo" element={<Newtodo />} />
        <Route path="/todos/:id" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;