import React, { useState } from 'react';
const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
            e.preventDefault();
            if(!title || !desc){
                alert("Tile or NoteKaro cannot be set empty");
            }
            else{
                props.addTodo(title , desc);
            setTitle("");
            setDesc("");
            }
    }
    return (
        <div className='container'>
            <h3 className='my-3'>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor ="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor ="desc">Note</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="form-control" id="desc" placeholder="NoteKaro"/>
                </div>
                
                <button type="submit" className="btn btn-success btn-sm my-3">Add Note</button>
            </form>
        </div>
    )
}

export default Addtodo
