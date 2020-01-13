import React from 'react';

//component that takes in the todo data and displays the task to the screen.

const Todo = props =>{
return (
    <div>
<p>{props.task}</p>
    </div>
)

}

export default Todo;