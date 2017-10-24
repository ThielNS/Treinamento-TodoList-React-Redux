import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTodo from '../actions/todo';
import '../css/AddTodoItem.css';

class AddTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  changeText(e) {
    this.setState({text: e.target.value});
  }

  addTodoItem(e) {
    e.preventDefault();
    if(this.state.text){
      this.props.dispatch(actionTodo.addTodoItem(this.props.index, this.state.text))
    } else {
      return;
    }
    this.setState({text: ''});
  }

  render() {
    return(
      <form
        onSubmit={e => this.addTodoItem(e)}
        className="add-todo-item">
        <input
          placeholder="Adicionar Item"
          onChange={(e) => this.changeText(e)}
          onBlur={e => this.addTodoItem(e)}
          value={this.state.text}
        />
      </form>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {state};
}
function mapDispatchToProps(dispatch){
  return {dispatch};
}

const exportAddTodoItem = connect(mapStateToProps, mapDispatchToProps)(AddTodoItem);

export default exportAddTodoItem;
