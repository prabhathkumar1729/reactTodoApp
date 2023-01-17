import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import todoServices from "../services/todosFetch";

export const fetchallTodos = createAsyncThunk(
    'todo/allTodos',
    async () => {
        const todos = await todoServices.getAll();
        return todos;
    }
);

export const addnewTodo = createAsyncThunk(
    'todo/addTodo',
    async (newObject) => {

        const todo = await todoServices.create(newObject);
        return todo;
    }
);

export const removeTodo = createAsyncThunk(
    'todo/removeTodo',
    async (id) => {
        const todo = await todoServices.remove(id);
        return todo;
    }
);

export const changeTodo = createAsyncThunk(
    'todo/editTodo',
    async (newObject) => { 
        // console.log("i received changed todo from form submission", newObject);
        const todo = await todoServices.update(newObject.id, newObject);
        // console.log("i received changed todo from server", todo);
        return todo;
    }
);


const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        // allTodos: (state, action) => {
        //     state.todos = action.payload;
        // },
        // addTodo: (state, action) => {
        //     state.todos.push(action.payload);
        // },
        // removeTodo: (state, action) => {
        //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        // },
        // toggleTodo: (state, action) => {
        //     state.todos = state.todos.map(todo => {
        //         if (todo.id === action.payload.id) {
        //             return {
        //                 ...todo,
        //                 completed: !todo.completed
        //             }
        //         }
        //         return todo;
        //     });
        // },
        // editTodo: (state, action) => {
        //     state.todos = state.todos.map(todo => {
        //         if (todo.id === action.payload.id) {
        //             return {
        //                 ...todo,
        //                 text: action.payload.text
        //             }
        //         }
        //         return todo;
        //     });
        // }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchallTodos.fulfilled, (state, action) => {
                // console.log("current initial state", current(state));
                // console.log("im in todolists and recevied ", action.payload);
                state.length = 0;
                state.push(...action.payload);
                // console.log("current state after I fetch all todos", current(state));
            })
            .addCase(addnewTodo.fulfilled, (state, action) => {
                // console.log("action payload recevied to add new todo", action.payload);
                // console.log("current initial state before I add new todo", current(state));
                state.push(action.payload);
                // console.log("current initial state after I add new todo", current(state));
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                // console.log("action payload recevied to remove todo", action.payload);
                // console.log("current state before remove todo", current(state));
                // const temp = state.filter(todo => todo.id !== action.payload);
                const indexTorRemove = state.findIndex(todo => todo.id === action.payload);
                state.splice(indexTorRemove, 1);
                // console.log("current state after remove todo", current(state));
            })
            .addCase(changeTodo.fulfilled, (state, action) => {
                const id = action.payload.id;
                // const todoToChange = state.find(todo => todo.id === id);
                // const changeTodo = {
                //     ...action.payload
                // }
                // console.log("action payload recevied to change todo", action.payload);
                const indexToChange = state.findIndex(todo => todo.id === id);
                state[indexToChange] = action.payload;
                // console.log("current state after change todo", current(state));
                //     state = state.map(todo => {
                //         if (todo.id === action.payload.id) {
                //             return {
                //                 ...todo,
                //                 content: action.payload.content,
                //                 completed: action.payload.completed
                //             }
                //         }
                //         return todo;
                //     });
            })
    }
});

// export const createTodo = (text) => {
//     return async (dispatch) => {
//         const todo = await todoServices.create(text);
//         dispatch(addTodo(todo));
//     }
// }

// export const updateTodo = (id, text) => {
//     return async (dispatch) => {
//         const todo = await todoServices.update(id, text);
//         dispatch(editTodo(todo));
//     }
// }

// export const deleteTodo = (id) => {
//     return async (dispatch) => {
//         await todoServices.remove(id);
//         dispatch(removeTodo(id));
//     }
// }

// export const fetchTodos = () => {
//     return async (dispatch) => {
//         const todos = await todoServices.getAll();
//         dispatch(allTodos(todos));
//     }
// }


export const { allTodos, addTodo,toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;