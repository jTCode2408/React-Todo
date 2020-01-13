import React from 'react';
//hold your input field and Add Todo and Clear Completed buttons.
//input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

class TodoForm extends React.Component{
constructor(){
    super();
    this.state= {
        todoText: ''
};
}


handleChanges = e => {
this.setState({
    todoText:e.target.value
});

};

handleSubmit = e => {
    e.preventDefault()
    this.props.addItem(this.state.todoText);
};

render (){
console.log(this.state);
    return(

        <form onSubmit={this.handleSubmit}>
<input
    type = "text"
    name="todo"
    value = {this.state.todoText}
    onChange = {this.handleChanges}
    placeholder = "add task"/>

<button>
    Add
</button>
<button className = "clear" onClick={this.props.clearComplete}> Clear Completed </button>
</form>
   
    );
}
}


export default TodoForm;