import React from 'react';
import TodoList from './TodoList';
import NavBar from './NavBar';

class App extends React.Component{
    render(){
      return(
            <section id="todo">
            <TodoList />
            <NavBar />
        </section>     
      )
    }
  }

  export default App