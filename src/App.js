import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

const todo =[
  
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }

]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //data should have task:todo title(shown to user), id:time stap(Date.now()), completed:false(toggles)
  //display:input field, submit/clear buttons


  constructor(){
    super();
    this.state = {
     todoList:todo
    };
  }

  toggleItem = id =>{
    const newToDoList = this.state.todoList.map(item =>{
      if (item.id ===id ) {
      return {
        ...item, 
        completed: !item.completed
      };
     } else {
        return item;
      }
    });


    this.setState({

      todoList: newToDoList
    });

  };


  addItem = itemName => {
    const newTask ={
      task: itemName,
      id:Date.now(),
      completed:false
    };
console.log("new task", newTask);

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
        <TodoForm addItem = {this.addItem}/>
        </div>
      <TodoList
      todo = {this.state.todoList}
      toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
