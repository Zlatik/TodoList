let nextTodoId = 1
export const addTodo = (text,date) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  date
})
export const cloneTodo = (todoId) => ({
  type: 'CLONE_TODO',
  id: nextTodoId++,
  todoId
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const setSort = (sort) => ({
  type: 'SET_SORT',
  sort
})
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
