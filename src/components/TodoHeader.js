import React from 'react';

// props = {
//   removeItem: function(),
//   id: 1,
// }

const TodoHeader = (props) => {
  return(
    <div className="todo-header">
      <h2>{props.title}</h2>
      <button onClick={() => props.removeTodo(props.index)}>X</button>
    </div>
  );
}

export default TodoHeader;
