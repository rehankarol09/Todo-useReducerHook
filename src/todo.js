import React from 'react';
import { ACTIONS } from './App';

export const Todos = ({todos,dispatch}) => {
  return(
      todos.map((todo,index)=>(
          <div key={index}>
            <span style={{textDecoration:todo.completed && 'line-through'}}>{todo.name}</span>


            <button   onClick={()=>{
                return (dispatch({type:ACTIONS.TOGGLE_TODOS,payload:{id:todo.id}}))
                
            }}>TOGGLE</button>

            <button onClick={()=>{
              return(dispatch({type:ACTIONS.DELETE_TODOS,payload:{id:todo.id}}))
            }}>Delete</button>

          </div>
      ))
    
   )

 }