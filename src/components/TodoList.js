import React, {Component} from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import * as actionTodo from '../actions/todo';
import '../css/TodoList.css';
import '../css/SearchForm.css';

class TodoList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  changeText(e) {
    this.setState({text: e.target.value});
    // this.props.dispatch(actionTodo.searchTodo(this.state.text));
  }

  render() {
    return (
      <div>
        <SearchForm searchText={this.state.text} changeText={this.changeText.bind(this)} />
        <ul className="todo-list">
          {this.props.state.todos.filter(f => {
            return f.title.indexOf(this.state.text) > -1
          }).map((todo, index) => {
            return (<Todo todo={todo} key={index} />);
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {state};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

const exportTodolist = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default exportTodolist;
