import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../components/styles/addTodoForm.css'




let AddTodo = ({ dispatch }) => {
  let input;
  let date;
  let currentDate = new Date();
  let month = + currentDate.getMonth() + 1;
  let day = (currentDate.getDate() < '10')?'0'+currentDate.getDate():currentDate.getDate();
  let year = currentDate.getFullYear();
  return (
    <div>
      <form  className = 'inputForm' onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }else if(date.value === ''){
          date.value = year + '-' + month + '-' + day;
        }

        dispatch(addTodo(input.value,date.value))
        input.value = '';
        date.value = year + '-' + month + '-' + day
      }}>
        <input className = 'message' placeholder = 'your TODO' ref={node => {
          input = node
        }} /> <span />
        <input className = 'calendar' type = 'date' defaultValue = { year + '-' + month + '-' + day}ref={elem =>{
          date = elem
        }}/> <span />
        <button className = 'submit'type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
