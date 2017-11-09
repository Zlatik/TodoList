import React from 'react'
import PropTypes from 'prop-types'
import  './styles/todo.css'
import './styles/index.css'

const Todo = ({ onClick, completed, text,date, clone,id}) => (

  <tr
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
   <td>{id}</td><td> {text}</td><td>{date}</td><td><input type = 'button' value = 'Clone' onClick = {clone} /></td>
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
