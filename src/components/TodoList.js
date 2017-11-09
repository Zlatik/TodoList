import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import  './styles/todos.css'
import './styles/index.css'
//import AddTodo from '../containers/AddTodo';



const TodoList = ({ todos, onTodoClick, onCloneClick,onSortClick}) => (
  <div className = 'wrapper'>
    <table >
    
      <tbody>
        <tr className = 'head'><td>Some todos</td></tr>
      {todos.map(todo =>
        <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        clone={(ev)=> onCloneClick(ev, todo.id)}
    
        
      />
      )}
      </tbody>
    </table>
  </div>
  
)


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
