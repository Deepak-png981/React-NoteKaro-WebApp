
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import Addtodo from './MyComponents/Addtodo';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    // console.log("presed delete " , todo);
    // todos ko set ker rha hai humari list mein
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    // console.log("add todo ", title , desc)
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let addtodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, addtodo]);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="NoteKaro" />
        <Switch>
          {/* in dono ko main tabhi rendor kerna chahta hoon jab slash mera end point ho */}
          <Route exact path="/" render={() => {
            return (<>
              <Addtodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
         

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
