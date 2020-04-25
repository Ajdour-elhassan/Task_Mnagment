import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types' ;



class TO extends Component {

    render() { 

    //Read ME!
    // Passing todos_state into here as a props
    // using map method as showing below : map(todo) as a function we can
    // Add anything we want to function (self) and call it inside like this :
    // we add (to) :
    return this.props.todos.map((todo) => (

     // <h4> {todo.title} {todo.id}</h4>
     // <h4> {todo.post}  including  {todo.title} </h4>
    //  every child in array should have a unique key (id)

   <TodoItems key={todo.id} todo={todo}

    markComplete={this.props.markComplete}

    delTodo={this.props.delTodo} />

    ));
  }
}

//
//props_types
// we should define "todos" state here
// todo state here is object

TO.propTypes = {
  todos : PropTypes.array.isRequired,
  markComplete : PropTypes.func.isRequired,
  delTodo : PropTypes.fun.isRequired,
}



export default TO ;