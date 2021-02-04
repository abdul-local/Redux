import React, { Component } from 'react'
import TextAndForm from './TextAndForm'

import {connect} from 'react-redux'

class List extends Component {
  constructor(){
    super();
    this.state={
    
    }
  }
  // buttonDeleteHandler=(index)=>{
  //   console.log('ini tombol delete')
  //   this.props.deleteTodos(index)

  // }


  render (){
    return (
    
      <ul className="list-group">
        {this.props.todos.map((todo,index) => (
          <li className="list-group-item container" key={index}>
          <TextAndForm 
          todo={todo}
          index={index}
          Delete={()=>this.buttonDeleteHandler(index)}
          
          />
         
          </li>
        ))}
      </ul>
      
    )    
  }
}
// menghubungkan component dengan redux dan memasukan state ke dalam store
const mapStateToProps=(state)=>{
  return {
    todos:state.todoReducer.todos
  }

}
// const mapDispatchToProps=(dispatch)=>{
//   return {
//   deleteTodos:(index)=>dispatch({type:'DELETE_TODOS',payload:index})
//   }

// }
export default connect(mapStateToProps,null)(List)

// export default List
