import React from 'react';
// 
const Todo = props =>{
    console.log("todo", props);
    return (
        <div
          className={`task${props.item.completed ? ' completed' : ''}`}
          onClick={() => props.toggleItem(props.item.id)}
        >
            
          <p>{props.item.task}</p>
        </div>
      );
    };

export default Todo;