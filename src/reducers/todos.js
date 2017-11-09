import undoable from 'redux-undo'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        date: action.date
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      } 
      return {
        ...state,
        completed: !state.completed
      }
    case 'CLONE_TODO':
      return {
        id: action.id,
        completed: state.completed,
        text: state.text,
        date: state.date
      }

     
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'CLONE_TODO':
      return [
        ...state,
        todo(state.find((elem)=> {return elem.id === action.todoId;
        }), action)
      ]
      case 'SORT_BY_NAME':
      
      let arr = state.sort((a,b)=>{
        let first = a.text.toLowerCase();
        let second = b.text.toLowerCase();
        return first - second; 
      })
      return arr;
    default:
      return state
  }
}

const undoableTodos = undoable(todos)

export default undoableTodos
