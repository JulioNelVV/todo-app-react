import { useEffect, useState } from "react";

const useTodo=(todos, index, isDone, editIndex, setEditIndex, toggleIsDone, deleteTodo)=>{
    const [done, setDone]=useState(isDone)
    const [disable, setDisable]=useState(false)
    const newTodos=[...todos];
    
   
    const onChangeHandler=()=>{
        setDone(!done)
    }

    const editHandler=()=>{
        setEditIndex(index)
        
    }
    const deleteHandler=()=>{
        deleteTodo(newTodos,index)
    }

    useEffect(()=>{
        if(editIndex!==-1){
            setDisable(true)
        }else{
            setDisable(false)
        }
        toggleIsDone(newTodos,index,done)
    },[editIndex, done])
    return{
        done,
        onChangeHandler,
        editHandler,
        disable, 
        deleteHandler
    }
}
export default useTodo;