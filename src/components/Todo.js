import React from 'react';

function Todo({todo, todos, setTodos}){
    // EVENTS
    function deleteHandler(){
        setTodos(todos.filter(el => el.id !== todo.id)); // filter through state and discard element that matches todo
    };
    function completeHandler(){
        setTodos(todos.map((item) => {
            if(item.id === todo.id){ //todo.id is passed. match query to id of passed todo.
                return{...item, completed: !item.completed} // Take all the item properties and add them(...item)
                // then change completed to opposite of completed.
            }
            return item; // return the rest of the items if they don't match id.
        }));
    }

    return(
       <div className="todo">
           {/* toggle `javascript`, is todo.completed TRUE, then append "completed" to className, else, append "" */}
           <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li> 
           <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
           <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
       </div>
    );
}
export default Todo;