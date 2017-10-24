import React, {Component} from 'react';
import * as actionTodo from '../actions/todo';
import {connect} from 'react-redux';

class TodoItemList extends Component {

  changeDone(idTodo, idItem) {
    let {todos} = this.props;
    let indexTodo = todos.findIndex(f => f.id === idTodo);
    let indexItem = todos[indexTodo].todoList.findIndex(f => f.id === idItem);

    this.props.dispatch(actionTodo.toggleTodoItem(indexTodo, indexItem));
  }

  render() {

    let {props} = this;
    let style = props.done ? 'list-item -check' : 'list-item';
    let idConcat = `${props.idTodo}-${props.id}`;

    return(
      <li className={style}>
        <label htmlFor={idConcat}>
          <input type="checkbox" id={idConcat} onClick={() => this.changeDone(props.idTodo, props.id)}/>
          {props.text}
        </label>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {todos: state.todos}
}

const mapDispatchToProps = dispatch => {
  return {dispatch}
}

const exportTodoItemList = connect(mapStateToProps, mapDispatchToProps)(TodoItemList);

export default exportTodoItemList;
