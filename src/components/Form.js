import React from "react";


function Form({ setInputText, todos, setTodos, inputText, setStatus, filteredTodos}){
    // write javascript code and functions.
    function inputtextHandler(e){
        setInputText(e.target.value);
    };
    function submitTodoHandler(e){
        e.preventDefault();
        setTodos([
            ...todos, // ... means if there are already todos in list, pass them.
            {text: inputText, completed: false, id: Math.random()*1000},
        ]);
        setInputText("");
    };

    function statusHandler(e) {
        setStatus(e.target.value);
    };


    return(
        <form>
            <input value={inputText} onChange={inputtextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onClick={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        );
}

export default Form;

