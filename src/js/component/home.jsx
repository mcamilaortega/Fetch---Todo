import React, { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodos = () => {
    
let newTodoList = [...todoList, {label: inputValue, done:false}]
fetch("https://playground.4geeks.com/apis/fake/todos/user/MariaOrtega", {
      method: "PUT",
      body: JSON.stringify(newTodoList),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
 if (!resp.ok) throw Error (response.statusText)
        return resp.json(); 
    })
    .then(resp => {
setTodoList (newTodoList)
        console.log(resp); 
    })
    .catch(error => {

        console.log(error);
    });
  };
  const removeTodo = (index) => {
    const newTodoList = todoList.filter((item,currentIndex) => index!== currentIndex);
    // setTodos(newTodos);
    fetch("https://playground.4geeks.com/apis/fake/todos/user/MariaOrtega", {
      method: "PUT",
      body: JSON.stringify(newTodoList),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
 if (!resp.ok) throw Error (resp.statusText)
        return resp.json(); 
    })
    .then(resp => {
setTodoList (newTodoList)
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
setTodoList (data)
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
          value={inputValue}
          type="text"
          placeholder="Add new task"
          onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={() => addTodos()} className="new">
          Add Task
        </button>
      </div>
      <div className="bottom-list">
        {todoList?.map((item, index) => (
          <div className= "individual-task"key={index}>
            <div> {item.label}</div>
            <button
              className="remove"
              onClick={() => removeTodo(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
