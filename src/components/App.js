import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Login";
import TodoListScreen from "./TodoListScreen";

class App extends Component {

  render() {
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/todolists" component={TodoListScreen} />
          </Switch>
        </Router>
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

export default App;
