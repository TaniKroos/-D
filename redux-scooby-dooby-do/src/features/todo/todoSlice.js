import {createSlice, nanoid} from '@reduxjs/toolkit';


const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello Reus"
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { 
            // state and action always available using redux reducers
            // state gives initial state 
            // action
            const todo = {
                id: nanoid() ,
                text: action.payload //payload is an object itself
            }
            state.todos.push(todo)

        },
        removeTodo: (state , action) => {
  
                state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            )
        },

        updateTodo: (state, action) => {
            const { id, payload } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = payload;
            }
        }

    }
})


export const {addTodo , removeTodo, updateTodo} = todoSlice.actions


export default todoSlice.reducer