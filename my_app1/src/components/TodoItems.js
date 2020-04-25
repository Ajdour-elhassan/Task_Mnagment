import React, { Component } from 'react';
import PropTypes from 'prop-types';



class TodoItems extends Component {
   //Styling method 1 ;
 //const itemStyle = {
  // backgroundColor: "#f4f4f4"
 //
 // Styling method 2 :
 
 getStyle = () =>  {

    return {
      
      background: '#f4f4f4',
      padding : '4px',
      borderBottom : '1px #ccc dotted',
      // if = ? else = :
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'

 }
 }


    render() {
      // const {id, title} = this.props.todo;
    return(

        //<div style={{ backgroundColor: '#f4f4f4'}} >
       // <div style={itemStyle}>

      <div style={this.getStyle()}>

        <p>

        <input type="checkbox" onChange={this.props.markComplete.bind
        (this, this.props.todo.id)} /> {''}

        {this.props.todo.title}

        <button onClick={this.props.delTodo.bind(this, this.props.todo.id)}
        style={btnStyle}> v </button>

        </p>
      </div>
    )
  }


}
//props_types
// we should define "todo" props here
 //todo props , here is an object
TodoItems.propTypes = {
  todo : PropTypes.object.isRequired,
  markComplete : PropTypes.func.isRequired,
  delTodo : PropTypes.fun.isRequired,
}

const btnStyle = {
  background : '#ff0000',
  color : '#fff',
  border :  'none' ,
  padding :  '5px 6px'  ,
  borderRadius :  '50%' ,
  cursor :  'pointer' ,
  float : 'right',

}





export default TodoItems ;