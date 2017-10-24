import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todo';
import '../css/AddTodo.css';

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      text: '',
      error: ''
    }
  }

  titleChange(e){
    this.setState({title: e.target.value})
  }

  textChange(e){
    this.setState({text: e.target.value})
  }

  handleAddTodo(e){
    e.preventDefault();
    if(this.props.type == 'note'){
      if(!this.state.title || !this.state.text){
        this.setState({error: 'Preencha os campos'});
        return;
      } else {
        this.props.dispatch(addTodo(this.state.title, this.state.text));
      }
    } else {
      this.props.dispatch(addTodo(this.state.title));
    }
    this.setState({
      title: '',
      text: ''
    });
    this.props.hideModal();
  }

  render() {
    return (
        <form
          className="add-todo"
          onSubmit={e => this.handleAddTodo(e)}
        >
          {this.state.error ? (<p className="error">{this.state.error}</p>) : null}
          <input
            onChange={e => this.titleChange(e)}
            value={this.state.title}
            placeholder="Titulo"
          />
          {this.props.type == 'note' ? (
            <textarea
              onChange={e => this.textChange(e)}
              placeholder="Texto" value={this.state.text}>
            </textarea>
          ) : null}
          <button onClick={e => this.handleAddTodo(e)}>Add</button>
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

const exportAddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default exportAddTodo;
