import React from 'react';
//hold your input field and Add Todo and Clear Completed buttons.
//input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

class TodoForm extends React.Component{
constructor(){
    super();
    this.state= {
        toDoText: ''
};
}


handleChanges = e => {
this.setState({

    toDoText:e.target.value
});

};

handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.toDoText);
};

render (){

    return(

        <form onSubmit={this.handleSubmit}>
<input
    type = "text"
    name="todo"
    value = {this.state.toDoText}
    onChange = {this.handleChanges}
    />

<button className = "add-toDo">
    Add
</button>
        </form>
    );
}
}


export default TodoForm;