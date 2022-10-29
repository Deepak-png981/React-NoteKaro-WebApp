import React from 'react'
import TodoItem from '../MyComponents/TodoItem'
const Todos = (props) => {
const mystyle = {
  minHeight : "70vh"
}
  return (
    <div>
      <div className="container my-3"  style={mystyle}>
        <h3 className=' my-3'>Notes List</h3>
        {/* ye {} if else ki trha use kero bro */}
        {props.todos.length === 0 ? <h3 className='text-center my-3 bg-primary my-4 py-3 text-white'>No Notes to Display</h3> : 
        props.todos.map((todo)=>{
            return( 
              <>
            <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete} /> 
            <hr/>
              </>
            )
        })
        }
      </div>
    </div>
  )
}

export default Todos
