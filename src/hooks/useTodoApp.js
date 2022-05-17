import { useEffect, useState } from "react";


 const useTodoApp=()=>{
    const [todos, setTodos]=useState(()=>{
        //getting store values in the localStorage object
        const initialTodos=JSON.parse(localStorage.getItem("todos"));
        return initialTodos || [];
    });
    const [editIndex, setEditIndex]=useState(-1);
    const [currentCategory, setCurrentCategory]=useState(()=>{
        const initalCategory=JSON.parse(localStorage.getItem("currentCategory"));
        return initalCategory || "All"
    });
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
    const toggleIsVisible=(currentCategory)=>{
        let list=[...todos];
        switch(currentCategory){
            case "In progress":
                list=todos.map((todo)=>{
                    todo.isDone?todo.isVisible=false:todo.isVisible=true;
                    return todo;
                })
                break;
            case "Done":
                list=todos.map((todo)=>{
                    todo.isDone?todo.isVisible=true:todo.isVisible=false;
                    return todo;
                })
                break;
            default:
                list=todos.map((todo)=>{
                    todo.isVisible=true;
                    return todo;
                })
                break;
        }
        setTodos(list)
    }
 
    const deleteTodo=(todos,index)=>{
        const filteredTodos=todos.filter((todo,pos)=>pos!==index)
        
        setTodos(filteredTodos)
    
        
    }
    const deleteCategory=()=>{
        let filteredTodos=[...todos];
        switch(currentCategory){
            case "In progress":
                filteredTodos=todos.filter((todo)=>todo.isDone===true)
                break;
            case "Done":
                filteredTodos=todos.filter((todo)=>todo.isDone===false)
                break;
            default:
                filteredTodos=[];
                break;
                
        }
        setTodos(filteredTodos);
    }
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
        localStorage.setItem("currentCategory", JSON.stringify(currentCategory))
    },[todos])

    return{
        todos,
        createTodo,
        editTodo,
        toggleIsDone,
        deleteTodo,
        editIndex,
        setEditIndex,
        currentCategory,
        setCurrentCategory, 
        toggleIsVisible,
        deleteCategory
    }
}
export default useTodoApp;