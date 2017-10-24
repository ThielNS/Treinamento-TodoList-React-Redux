import {createStore} from 'redux';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

//reducer
function counter(state=0, action){
  switch (action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}



//actions


export function incrementarContador(){
  return {
    type: 'INCREMENT',

  }
}

export function decrementarContador(){
  return {
    type: 'DECREMENT',
  }
}


//store
let store = createStore(counter);

//escutando as alteracoes da minha store
store.subscribe(() => console.log(store.getState()));

//disparando uma action - uma das maneiras
store.dispatch({type: 'INCREMENT'});

//***********************************************************************************
// Componente qualquer

class App extends React.Component {
  componentDidMount() {
    console.log(this)
  }
  render() {
    return(
      <div>
        <p> Meu contadoradsfdas vale: {this.props.state}</p>
        <button onClick={() => this.props.dispatch(incrementarContador())}>incrementar</button>
        <button onClick={() => this.props.dispatch(decrementarContador())}>Decrementar</button>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    state,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     abreviacaoPraChamarFuncaoIncrementar: () => {
//       dispatch(incrementarContador())
//     }
//   }
// }
//export default App;
const ExportedApp = connect(mapStateToProps)(App);
//***********************************************************************************



ReactDOM.render(
  <Provider store={store}>
  <ExportedApp />
  </Provider>
  ,document.getElementById('root'));
