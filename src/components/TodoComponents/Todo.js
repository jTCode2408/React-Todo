import React from 'react';

//component that takes in the todo data and displays the task to the screen.

const Todo = props =>{
    console.log(props);
return (
    <div className={`task${props.completed ? ' complete' : ''}`}
    onClick={() => props.toggleItem(props.todo.id)}>


<p>{props.task}</p>
    </div>
)

}

export default Todo;