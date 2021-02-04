import React,{ Component } from "react";
import {connect} from 'react-redux'
import { deleteTodos,editTodos } from "../../store/todoAction";



class TextAndForm extends Component {
    constructor(props){
        super(props)
        this.state={
            viewMode:'show',
            text:props.todo

        }
    }
    editButtonHandler=()=>{
        this.setState({viewMode:'edit'})
    }
    saveButtonHandler=()=>{
        console.log('button save')
        this.props.editTodos(this.props.index,this.state.text)
        this.setState({viewMode:'show'})

    }
    cancleButtonHandler=()=>{
        this.setState({viewMode:'show'})
    }
    onChangeHandler=(event)=>{
        this.setState({text:event.target.value})

    }
    onDeleteButtonHandler=(index)=>{
        this.props.deleteTodos(index);
    }

    render(){

        var todo=(<p>{this.props.todo}</p>)
          // defaut tampilan disamping text todo berupa tombol edit
       var buttonEdit = (
        <button
          className="btn btn-primary"
          onClick={this.editButtonHandler}
        >
          Edit
        </button>
      )
  
      // jika viewMode berubah menjadi 'edit',
      if (this.state.viewMode === 'edit') {
        // ganti element text todo menjadi form input
        todo = (
          <input
            className="form-control"
            type="text"
            value={this.state.text}
            onChange={this.onChangeHandler}
          />
        )
  
        // ganti tombol ediit menjadi tombol save dan cancel
        buttonEdit = (
          <>
            <button
              className="btn btn-success"
              onClick={this.saveButtonHandler}
            >
              Save
            </button>
            <button
              className="btn btn-warning"
              onClick={this.cancleButtonHandler}
            >
              Cancel
            </button>
          </>
        )
      }
        return(
            
            <div className="row"> 
             <div className="col-8">
          {todo}
            </div>
           <div className="col-4">
          {buttonEdit}
          <button
            className="btn btn-danger"
            onClick={()=>this.onDeleteButtonHandler(this.props.index)}
          >
            Delete
          </button>
            </div>
            </div>
            
        )
        
    }

}
const mapDispatchToProps=(dispatch)=>{
    return {
        editTodos:(index,todo)=>dispatch(editTodos(index,todo)),
        deleteTodos:(index)=>dispatch(deleteTodos(index))
    }
}
export default connect (null,mapDispatchToProps)(TextAndForm);