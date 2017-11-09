import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import {cloneTodo} from '../actions'
//import {sortByName} from '../actions'



const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (todoId) => {dispatch(toggleTodo(todoId));},
  onCloneClick: (ev, todoId) => {
    ev.stopPropagation();
    dispatch(cloneTodo(todoId));
  }
  //onSortClick: ()=>{dispatch(sortByName())}

})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
