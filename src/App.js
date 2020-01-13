import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
// import TodoForm from './components/TodoComponents/TodoForm'




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //data should have task:todo title(shown to user), id:time stap(Date.now()), completed:false(toggles)
  //display:input field, submit/clear buttons


  constructor(){
    super();
    this.state = {
     todoList:'ToDoList'
    };
  }

  toggleItem = id =>{
    const NewtoDo = this.state.TodoList.map(todo =>{
      if (todo.id ===id ) {
      return {
        ...todo, 
        completed: !todo.completed
      };
     } else {
        return todo;
      }
    });


    this.setState({

      todoList: NewtoDo
    });

  };


  addToDo = todoTask => {
    const newTask ={
      task: todoTask,
      id:Date.now(),
      completed:false
    };

    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };



  render() {
    console.log('rendering to do..');
    return (
      
      <div className = "app-cont">
        <div className = "head">
        <h2>Welcome to your Todo App!</h2>
        {/* <TodoForm addTask = {this.addTask}/> */}
        </div>
      <TodoList
      todo = {this.state.todoList}
      toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
