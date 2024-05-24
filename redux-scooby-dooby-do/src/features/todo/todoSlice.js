import {createSlice, nanoid} from '@reduxjs/toolkit';


const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello Reuss"
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
                const d = action.id
                state.todos = state.todos.filter((todo) => 
                todo.id !== d
            )
        },

        updateTodo: (state,action) => {
            const updateTodos = state.todos.map( todo => {
                if(todo.id === action.id){
                    return {...todo, text: action.payload}
                }
                return todo;
            })
            state.todos = updateTodos
        }

    }
})


export const {addTodo , removeTodo, updateTodo} = todoSlice.actions


export default todoSlice.reducer