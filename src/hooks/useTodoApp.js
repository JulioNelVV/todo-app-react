import { useEffect, useState } from "react";

 //This is the global custom hook of the entire App
 const useTodoApp=()=>{
     /*
        the todos state set the list of to do items and its initial
        value is equal to an empty array or a todo list saved in 
        the local storage of the user
     */
    const [todos, setTodos]=useState(()=>{
        //getting store values in the localStorage object
        const initialTodos=JSON.parse(localStorage.getItem("todos"));
        return initialTodos || [];
    });
    /*
        the editIndex allow to the Todo component and the FormTodo
        component know the index of the element that has been set
        for editing 
    */
    const [editIndex, setEditIndex]=useState(-1);
    /*
        the currentCategory state share to the components what
        is the category that is selected for showing the elements
        that belongs to it, by default will be All or the last
        category the user save in the local storage
     */
    const [currentCategory, setCurrentCategory]=useState(()=>{
        const initalCategory=JSON.parse(localStorage.getItem("currentCategory"));
        return initalCategory || "All"
    });
    //Global methods
    //Create a to do item
    const createTodo=(todos, newTodo)=>{
        setTodos([...todos, newTodo])
    }
    //Edit a todo item
    const editTodo=(todos, editIndex, newName)=>{
        todos[editIndex]={...todos[editIndex], name:newName};
        setTodos(todos);
        setEditIndex(-1); 
    }
    //Change the isDone property of the to do item
    const toggleIsDone=(todos, toggleIndex,done)=>{
        todos[toggleIndex].isDone=done;
        setTodos(todos)
    }
    //Change the visibility of the items based on the currentCategory
    const toggleIsVisible=(currentCategory)=>{
        let list=[...todos];
  
        switch(currentCategory){
            //All the elements are visible
            case "All":
                list=todos.map((todo)=>{
                    todo.isVisible=true;
                    return todo;
                })
                break;
            case "In progress":
                //Just the element that has isDone property in false are visible
                list=todos.map((todo)=>{
                    todo.isDone?todo.isVisible=false:todo.isVisible=true;
                    return todo;
                })
                
                break;
                //Just the element that has isDone property in true are visible
            case "Done":
                list=todos.map((todo)=>{
                    todo.isDone?todo.isVisible=true:todo.isVisible=false;
                    return todo;
                })
                break;
        }
        setTodos(list)
    }
 
    //Delete a single to do item
    const deleteTodo=(todos,index)=>{
        const filteredTodos=todos.filter((todo,pos)=>pos!==index)
        setTodos(filteredTodos)
    }
    //This method allow us to delete all the elements in a category
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
    /*  
        Every time we change the todo list we save its value
        and the currentCategory value in the local storage of
        the user
    */
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
        localStorage.setItem("currentCategory", JSON.stringify(currentCategory))
    },[todos])
    //return the values needed for rendering
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