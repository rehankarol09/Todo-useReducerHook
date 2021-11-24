import React, {  useReducer, useState } from 'react';
import { Todos } from './todo';


export const ACTIONS = ({
  ADDTODOS: 'ADDTODOS',
  TOGGLE_TODOS:'TOGGLE_TODOS',
  DELETE_TODOS:'DELETE_TODOS'

})

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADDTODOS:
      return [...todos, newtodo(action.payload.name)]
    


    case ACTIONS.TOGGLE_TODOS:
      return todos.map((todo, index) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo

      })

    case ACTIONS.DELETE_TODOS:
      return todos.filter(todo=>todo.id!=action.payload.id)
    


    default:
      return todos

  }

}

const newtodo = (name) => {
  return { id: Date.now(), name: name, completed: false }

}


export const App = (props) => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('')

  const handleinput = (e) => {
    e.preventDefault();
    dispatch({type:ACTIONS.ADDTODOS,payload:{name:name}})
    setName('')

  }

 console.log(todos)

  return (

    <>
      <form onSubmit={handleinput}>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </form>
     <Todos todos={todos} dispatch={dispatch}/>


    </>

  )

}