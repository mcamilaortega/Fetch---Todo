import React, { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodos = (newTodo) => {
    // const task = {
    //   label: todo,
    //   done: false,
    // };
    // setTodos([...todos, task]);
    // setTodo("");
let newTodos = [...todos, {label: newTodo, done:false}]
fetch("https://playground.4geeks.com/apis/fake/todos/user/MariaOrtega", {
      method: "PUT",
      body: JSON.stringify(newTodos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
 if (!resp.ok) throw Error (response.statusText)
        return resp.json(); 
    })
    .then(resp => {
setTodos (newTodos)
        console.log(resp); 
    })
    .catch(error => {

        console.log(error);
    });
  };
  const removeTodos = (index) => {
    const newTodos = todos.filter((task,currentIndex) => index!== currentIndex);
    // setTodos(newTodos);
    fetch("https://playground.4geeks.com/apis/fake/todos/user/MariaOrtega", {
      method: "PUT",
      body: JSON.stringify(newTodos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
 if (!resp.ok) throw Error (resp.statusText)
        return resp.json(); 
    })
    .then(resp => {
setTodos (newTodos)
        console.log(resp); 
    })
    .catch(error => {

        console.log(error);
    });
  };
useEffect (() => {
  fetch("https://playground.4geeks.com/apis/fake/todos/user/MariaOrtega")
    
    .then(resp => 
         resp.json() 
    )
    .then(data => {
setTodos (data)
        console.log(resp); 
    })
    .catch(error => {

        console.log(error);
    });
  },[])
  return (
    <div className="text-center">
      <div className="top">
        <h1> To-do List </h1> 
        <input
          value={todo}
          type="text"
          placeholder="Add new task"
          onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={() => addTodos(todo)} className="new">
          Add Task
        </button>
      </div>
      <div className="bottom-list">
        {todos?.map((task, index) => (
          <div className= "individual-task"key={index}>
            <div> {task.label}</div>
            <button
              className="remove"
              onClick={() => removeTodos(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
