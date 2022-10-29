import React from 'react'

const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <h5 className='my-2'>{todo.title}</h5>
      <p className='my-2'>{todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>DELETE</button>
    </div>
  )
}

export default TodoItem
