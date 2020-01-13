// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//receives Todos array and iterates over the list generating a new <Todo /> for each element in the array.
import React from 'react';
import Todo from './Todo';



const TodoList = props =>{

    return (
       
<div className = "toDo-List">
<h2>Things to do:</h2>
{props.task.map(todo =>(
    <Todo key ={todo.id} task = {todo.task} completed = {props.toggleItem} />
))}
</div>
);
};

export default TodoList;