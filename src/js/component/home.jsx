import React, { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodos = (todo) => {
    const task = {
      label: todo,
      done: false,
    };
    setTodos([...todos, task]);
    setTodo("");
  };
  const removeTodos = (todo) => {
    const newTodos = todos.filter((task) => task!== todo);
    setTodos(newTodos);
  };
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
              onClick={() => removeTodos(task)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
