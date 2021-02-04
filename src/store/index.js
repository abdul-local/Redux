
import {combineReducers, createStore} from'redux'

const initialStateTodos={
    todos:[]
    
}
const initialStateNotes={
    notes:[]
}

const todoReducer=(state=initialStateTodos,action)=>{
    // return state;
    switch (action.type) {
        case 'ADD_TODOS':
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        case 'DELETE_TODOS':
            let newTodos=[...state.todos];
                newTodos.splice(action.payload.index,1);
                return {
                    ...state,
                    todos:newTodos
                }
            
        case 'EDIT_TODOS':
            let todos=[...state.todos];
            let index=action.payload.index;
            let todo=action.payload.todo;
            todos[index]=todo
            return {
                ...state,
                todos
            }
        
    
        default:
            return state;
    }

    
}
const noteReducer=(state=initialStateNotes,action)=>{
    switch (action.type) {
        case 'NOTE_TODOS':
            return {
                ...state,
                notes:[...state.notes,action.payload]
            }
    
        default:
            return state;
    }

}
const rootReducer=combineReducers({
    todoReducer:todoReducer,
    noteReducer:noteReducer
})

const store=createStore(rootReducer)


export default store;



