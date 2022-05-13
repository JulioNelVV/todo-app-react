import { useEffect, useState } from "react";
import Todo from "./components/Todo.js";
import FormTodo from "./components/FormTodo.js"
import "./App.css"

function App() {
    //Declaring the state
    
    const [todos, setTodos]=useState(()=>{
        //getting store values in the localStorage object
        const initialTodos=JSON.parse(localStorage.getItem("todos"));
        return initialTodos || [];
    });
    const [editTodo, setEditTodo]=useState({
        index: -1,
        name: "",
        isDone: false
    });
    //Functions to manipulate the todo list
    //Create a todo: wait for a new todo list
    const updateTodos=(newTodos)=>{
        setTodos(newTodos);
    }
    
    useEffect(()=>{

        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    return(
        
        <div className="App">
            <h1>Todo App</h1>
            <FormTodo
                todos={todos}
                updateTodos={(newTodos)=>{updateTodos(newTodos)}}
                editTodo={editTodo}
                setEditTodo={(editTodo)=>{setEditTodo(editTodo)}}
            />
            <ul>
                {
                    todos.length===0
                    ?
                    <li>There's no pending to do tasks</li>
                    :
                    todos.map((todo, index)=>{
                        return(
                            <Todo
                                todos={todos}
                                updateTodos={(newTodos)=>{
                                    updateTodos(newTodos)
                                }}
                                key={index}
                                index={index}
                                name={todo.name}
                                isDone={todo.isDone}
                                editTodo={editTodo}
                                setEditTodo={(EditTodo)=>{
                                    setEditTodo(EditTodo)
                                }}
                            />
                        )
                    })
                }
            </ul>
          
            
        </div>
     
  )
}

export default App;
