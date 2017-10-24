import React, {Component} from 'react';
import AddTodoItem from './AddTodoItem';
import TodoItemList from './TodoItemList';
import {connect} from 'react-redux';

class TodoContent extends Component{

  render() {

    let elements = (
      <div>
        <ul className="todo-group-item">
          {this.props.todoList.filter(t => t.done === false).map(todoList => (
            <TodoItemList key={todoList.id} {...todoList} indexTodo={this.props.index} idTodo={this.props.id} />
          ))}
          {this.props.todoList.filter(t => t.done === true).map(todoList => (
            <TodoItemList key={todoList.id} {...todoList} indexTodo={this.props.index} idTodo={this.props.id} />
          ))}
        </ul>
        <AddTodoItem {...this.props}/>
      </div>
    );

    return(
      <div className="todo-content">
        {this.props.text ? (
          <div value={this.props.text} contentEditable>{this.props.text}</div>
        ) : elements
      }
      </div>
    );
  }
}

export default TodoContent;
