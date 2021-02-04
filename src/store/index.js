
import {createStore} from'redux'

const initialState={
    todos:[]
}

const rootReducer=(state=initialState,action)=>{
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

const store=createStore(rootReducer)


export default store;



