import {createStore} from 'redux';

function counter(state=0, action){
  switch (action.type) {
    case 'INCREMENT':
      return state++;
    case 'DECREMENT':
      return state--;
    default:
      return state;
  }
}


let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));


store.dispatch({type: 'INCREMENT'});
