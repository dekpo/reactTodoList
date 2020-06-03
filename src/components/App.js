import React from 'react';
import TodoList from './TodoList';
import NavBar from './NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddTask from './AddTask';
import initialData from '../initialData';
import uniqid from 'uniqid';


class App extends React.Component{

  state = {
    tasks: initialData
  }

  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
    taskToUpdate.completed = !taskToUpdate.completed

    this.setState(prevState => (
      prevState.tasks.map( task => {
        return task.id === taskId ? taskToUpdate : task
      })
    ))
  }

  onAddTask = (newTaskName) => {
    let newTask = {
      id: uniqid(),
      name: newTaskName,
      completed: false
    }

    this.setState(prevState => ({
      tasks : [...prevState.tasks, newTask]
    }))
  }

    render(){
      return(
          <section id="todo">
            <BrowserRouter>
              <Switch>
                <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
                <Route path="/:filter?" render={(props) => <TodoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
              </Switch>
              <NavBar />
            </BrowserRouter>
          </section>     
      )
    }
  }

  export default App