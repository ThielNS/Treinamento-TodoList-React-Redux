import React, {Component} from 'react';
import Header from './Header';
import TodoList from './TodoList';
import ButtonAdd from './ButtonAdd'

class TodoListScreen extends Component {

  render() {
    return(
      // <div>
      //   <form onSubmit={(e) => this.addTodo(e)}>
      //     <input value={this.state.text} onChange={(e) => this.handleChange(e)} />
      //     <button onClick={(e) => this.addTodo(e)}>Add Todo</button>
      //   </form>
      //   {this.props.state.todos.map((item, index) => {
      //     return <div key={index}> {item.text} </div>
      //   })}
      // </div>
      <div>
        <Header />
        <div className="container">
          <TodoList />
        </div>
        <ButtonAdd />
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   const actions = {... todoActions};
//   return {
//     actions : bindActionCreators(actions, dispatch)
//     }
//   }

export default TodoListScreen;
