import React from 'react';
import { useDispatch } from 'react-redux'
import {addnewTodo} from '../reducers/todoSlice'

export default function Newtodo()
{
    const dispatch = useDispatch()
    const addTodo = (e) => {
        e.preventDefault()
        const todo = e.target.elements.todo.value
        dispatch(addnewTodo({
            content: todo,
            completed: false
        }))
        e.target.elements.todo.value = ''
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="todo" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}