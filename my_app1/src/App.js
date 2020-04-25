import React ,  {Component} from 'react' ;
import {BrowserRouter as Router, Route } from 'react-router-dom' ;
import Header from './components/Header.js' ;
import TO from './components/TO.js' ;
import Addtask from './components/Addtask.js' ;
import Footer from './components/Footer.js' ;
import About from './components/page/About.js' ;
import Login from './components/page/Login.js' ;
//import uuid from 'uuid';
import axios from 'axios' ;

import './App.css' ;

class App extends Component {
  // this a state as an array enitered an object
  state = {
    todos : []
    }
    /*  {
        id: 1, //uuid.v4(),
        title:'take out the crash',
        completed: false

      },

      {
        id: 2, //  uuid.v4(),
        title:'have a dinner',
        completed: false

      },
      {
        id: 3, // uuid.v4(),
        title:'Meeting with fiends',
        completed:false

      },
    ] 

  } */

  //we can use any fun with map and return to like map(todo) above
  //Toggle complete ==> state

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map( todo => {
      if (todo.id === id ) {
       // toggle
          todo.completed = !todo.completed
      }
      return todo ;
    })
    });
  }

  // Delete Todoitem
  delTodo = (id)  => {
    this.setState({ todos: [...this.state.todos.filter( todo =>
    // filter any id that does not equals id.todo
    todo.id !== id )]});
  }

  // Add Taskn
  addtask = (title) => {
    const newTodo = {
      id : 4, // uuid.v4(),
      title,
      complete : false
    }

    this.setState ({ todos: [...this.state.todos, newTodo ] });
  }

  render()  {
    
    
  return (

    //figuer out todo into "TO" as a props (this.state.todo)
<Router> 
 <div ClassName="App" >
    <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Addtask addtask={this.addtask} />
            <TO todos={this.state.todos}
             markComplete={this.markComplete}
             delTodo={this.delTodo} />
          </React.Fragment>
          )} />
          <Footer />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
    </div>
  </div>
</Router>


      );

    }
  
}

export default App;


