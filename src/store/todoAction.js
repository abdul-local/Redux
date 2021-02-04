// const addTodo=(todo)=>({type:'ADD_TODOS',payload:todo})
import *as ActionTypes from '../action/ActionTypes'
export const addTodos=(todo)=>{
    return ({type:ActionTypes.ADD_TODOS,payload:todo})
}
export const deleteTodos=(index)=>{
    return ({type:ActionTypes.DELETE_TODOS,payload:index})
}
export const editTodos=(index,todo)=>({type:ActionTypes.EDIT_TODOS,payload:(index,todo)})
 
export const noteTodos=(note)=>({type:ActionTypes.NOTE_TODOS,payload:note})