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
        setEditIndex
    }
}
export default useTodoApp;