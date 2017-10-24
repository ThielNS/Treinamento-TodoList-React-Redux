
export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        id: state.length+1,
        title: action.title,
        text: action.text,
        todoList: []
      });
    case 'REMOVE_TODO':
      return state.filter((f, i) => i !== action.index);
    case 'RENAME_TODO':
      return state.map((todo, index) => {
        if(index === action.index){
          Object.assign({}, todo, {
            title: action.title
          })
        }
        return todo;
      })
    case 'ADD_TODO_ITEM':
      let todo = state[action.index];
      let newTodoList = {
        id: todo.todoList.length + 1,
        text: action.text,
        done: false
      }

      newTodoList = todo.todoList.concat(newTodoList);

      return state.map((todo, index) => {
        if(index == action.index){
          todo.todoList = newTodoList;
        }
        return todo;
      });
    case 'TOOGLE_TODO_ITEM':
      let todos = state[action.indexTodo].todoList.map((todo, index) => {
        if(index === action.indexItem){
          todo.done = !todo.done;
        }
        return todo;
      })
      return state.map((todo, index) => {
        if(index == action.indexTodo) {
          todo.todoList = todos
        }
        return todo;
      })
    case 'SEARCH_TODO':
    console.log(state, action.title);
      return state.filter(f => {
        return f.title.indexOf(action.title) > -1;
      });
    default:
      return state
  }
}
