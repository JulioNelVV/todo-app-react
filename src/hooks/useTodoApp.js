import { useEffect, useState } from "react";


 const useTodoApp=()=>{
    const [todos, setTodos]=useState(()=>{
        //getting store values in the localStorage object
        const initialTodos=JSON.parse(localStorage.getItem("todos"));
        return initialTodos || [];
    });
    const [editIndex, setEditIndex]=useState(-1);
    const createTodo=(todos, newTodo)=>{
        setTodos([...todos, newTodo])
    }
    const editTodo=(todos, editIndex, newName)=>{
        todos[editIndex]={...todos[editIndex], name:newName};
        setTodos(todos);
        setEditIndex(-1); 
    }
    const toggleIsDone=(todos, toggleIndex,done)=>{
        todos[toggleIndex].isDone=done;
        setTodos(todos)
    }
    const toggleIsVisible=(todos, filterValue)=>{
        let filteredTodos=[...todos];
        switch(filterValue){
            case "In progress":
                filteredTodos=todos.map((todo)=>{
                    todo.isDone?todo.isVisible=false:todo.isVisible=true;
                    return todo
                })
                break;
            case "Done":
                filteredTodos=todos.map((todo)=>{
                    todo.isDone?todo.isVisible=true:todo.isVisible=false;
                    return todo
                })
                break;
            default:
                filteredTodos=todos.map((todo)=>{
                    todo.isVisible=true;
                    return todo
                })
                break;
            
        }
        
        setTodos(filteredTodos)
    }
    const deleteTodo=(todos,index)=>{
        const filteredTodos=todos.filter((todo,pos)=>pos!==index)
        setTodos(filteredTodos)
    }
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    return{
        todos,
        createTodo,
        editTodo,
        toggleIsDone,
        deleteTodo,
        editIndex,
        setEditIndex,
        toggleIsVisible
    }
}
export default useTodoApp;