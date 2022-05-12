import { useState } from "react";
import Todo from "./components/Todo.js";
import FormTodo from "./components/FormTodo.js"
import "./App.css"

function App({initialTodos}) {
    //Declaring the state
    const [todos, setTodos]=useState(initialTodos);
    
    //Functions to manipulate the todo list
    //Create a todo: wait for a new todo list
    const createTodo=(newTodos)=>{
        setTodos(newTodos)
    }
    //Edit a todo: wait for a new list
    const editTodo=(newTodos)=>{
        setTodos(newTodos)
    }
    //Delete a todo: wait for a new list
    const deletTodo=(index)=>{

    }
    return(
        
        <div className="App">
         
            <h1>Todo App</h1>
            
            <FormTodo
                todos={todos}
                createTodo={(newTodos)=>{createTodo(newTodos)}}
            />
            <ul>
                {
                    todos.map((todo, index)=>{
                        return(
                            <Todo
                                todos={todos}
                                editTodo={(newTodos)=>{
                                    editTodo(newTodos)
                                }}
                                key={index}
                                index={index}
                                name={todo.name}
                                isDone={todo.isDone}
                            />
                        )
                    })
                }
            </ul>
          
            
        </div>
     
  )
}

export default App;
