import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTodo from '../actions/todo';
import TodoHeader from './TodoHeader';
import TodoContent from './TodoContent';

class Todo extends Component{

  removeTodo (index) {
    this.props.dispatch(actionTodo.removeTodo(index));
  }

  render() {

    const {todo} = this.props;
    let index = this.props.todos.findIndex(f => f.id === todo.id);

    return (
      <li className="todo-item">
        <TodoHeader {...todo} removeTodo={this.removeTodo.bind(this)} index={index} />
        <TodoContent {...todo} index={index} />
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return {dispatch}
}


const exportTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default exportTodo;
