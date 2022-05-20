import { useEffect, useState } from "react";

const useTodo=(todos, index, isDone, editIndex, setEditIndex, toggleIsDone, deleteTodo, currentCategory, toggleIsVisible)=>{
    //The done state controls the isDone value of each to do item
    const [done, setDone]=useState(isDone);
    /*
        if the element is being edited, the edit and delete buttons
        will be disabled
    */
    const [disable, setDisable]=useState(false);
    const newTodos=[...todos];
    
   //Declaring the handlers
    const isDoneHandler=()=>{
        setDone(!done);
    }

    const editHandler=()=>{
        setEditIndex(index);
        
    }
    const deleteHandler=()=>{
        deleteTodo(newTodos,index);
    }

    /*
        If we are editing the buttons edit and delete will be disabled
        if we change the value of the state done of an element that value
        will be updated in the list thanks to a global method and the 
        visibility of the element correspond to the currentCategory value
    */
    useEffect(()=>{
        if(editIndex!==-1){
            setDisable(true);
        }else{
            setDisable(false);
        }
       
        toggleIsDone(newTodos,index,done);
        toggleIsVisible(currentCategory);
    },[editIndex, done, currentCategory])
    //returning the values needed for rendering
    return{
        done,
        isDoneHandler,
        editHandler,
        disable, 
        deleteHandler
    }
}
export default useTodo;