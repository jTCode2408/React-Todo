// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//receives Todos array and iterates over the list generating a new <Todo /> for each element in the array.
import React from 'react';
import Todo from './Todo';
const GroceryList = props => {

  return (
    <div className="shopping-list">
      {props.todo.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}

 
    </div>
    
  );
};

export default GroceryList;
