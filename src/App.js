import React, { useEffect, useState } from "react"; // import states
import './App.css';
// Import Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // STATES
  const [inputText, setInputText] = useState(""); // inputText is value, setInputText is function that changes value.
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all"); // "all" as default
  const [filteredTodos, setFilteredTodos] = useState([]);
  //RUN ONCE WHEN THE APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT
  useEffect(() => {
    // CALLS
    filterHandler(); 
    saveLocalTodos();
  }, [todos, status]); // on page refresh too
  
  
  function filterHandler(){
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true)); 
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    };
  };
  // SAVE TO LOCAL STORAGE
  function saveLocalTodos(){
      localStorage.setItem("todos",JSON.stringify(todos)); // pushing state into local storate
  };
  // GET LOCAL STORAGE
  function getLocalTodos() {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([])); // on refresh set local storage to empty array
    }
    else{
     let todoLocal = JSON.parse(localStorage.getItem("todos")); // get from local storage
     setTodos(todoLocal); // set state to what was in local storage
    }
  };

  // FUNCTIONS
  return (
    <div className="App">
      <header>
        <h1>Tony's Todo List</h1>  
      </header> 
      <Form 
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
