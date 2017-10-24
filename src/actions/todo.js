export function addTodo(title, text) {
  return {type: 'ADD_TODO', title, text}
}

export function removeTodo(index) {
  return {type: 'REMOVE_TODO', index}
}

export function renameTodo(index, title) {
  return {type: 'RENAME_TODO', index, title}
}

export function changeText(index, text) {
  return {type: 'CHANGE_TEXT', index, text}
}

export function addTodoItem(index, text) {
  return {type: 'ADD_TODO_ITEM', index, text}
}

export function toggleTodoItem(indexTodo, indexItem){
  return {type: 'TOOGLE_TODO_ITEM', indexTodo, indexItem}
}

export function searchTodo(title) {
  return {type: 'SEARCH_TODO', title}
}
