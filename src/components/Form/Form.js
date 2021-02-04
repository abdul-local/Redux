import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTodos, noteTodos} from '../../store/todoAction'


class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      choice:'todo'
    }
  }  

  onChangeHandler = (e) => {
    this.setState({ text : e.target.value })
  }

  onSubmit = () => {
    if(this.state.choice ==='todo'){
      console.log('ini exksuksi add todo')
      this.props.addTodos(this.state.text)
      
    }else{
      console.log('ini ekskuasi note')
      this.props.noteTodos(this.state.text)
    }
    
    this.setState({ text: '' })
      
    
    
  }
  onClickChoice=(value)=>{
    
    this.setState({choice:value})
  }

  render () {
    var styleButtonTodo = ''
  var styleButtonNotes = ''
if(this.state.choice === 'todo') {
styleButtonTodo = 'btn-success'
} else {
styleButtonNotes = 'btn-success'      
}
    return (
      <>
      <button onClick={()=>this.onClickChoice('todo')} className={`btn m-2 ${styleButtonTodo}`}>Switch to Add Todo</button>
      <button onClick={()=>this.onClickChoice('notes')}className={`btn ${styleButtonNotes}`}>Switch to Add Notes</button>
        <p>Add {this.state.choice}</p>
        <div className="form-group">
          <input 
          value={this.state.text}
          onChange={this.onChangeHandler} type="text" className="form-control" placeholder="Type todo here" />
        </div>
        <button onClick={this.onSubmit} className="btn btn-primary">Add</button>
      </>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
      return {
        addTodos:(todo)=>dispatch(addTodos(todo)),
        noteTodos:(note)=>dispatch(noteTodos(note))
      }

} 

export default connect(null,mapDispatchToProps)(Form);