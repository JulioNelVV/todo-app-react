import { useEffect, useState } from "react";


function Todo({todos, updateTodos, name, index, isDone, editTodo, setEditTodo}){
    const [done, setDone]=useState(isDone)
    const [disable, setDisable]=useState(false)
    let newTodos=[...todos];
    newTodos[index].isDone=done;

    const onChangeHandler=()=>{
        setDone(!done)
        updateTodos(newTodos)
    }
    const editHandler=()=>{
        
        setEditTodo(newTodos[index])
       
    }
    const DeleteHandler=()=>{
        let result=newTodos.filter((todo,pos)=>pos!==index)
        updateTodos(result)
    }
    useEffect(()=>{
        if(editTodo.name!==""){
            setDisable(true)
        }else{
            setDisable(false)
        }
    },[editTodo])
    return(
        <li>
            <input
                type="checkbox"
                value={done}
                onChange={onChangeHandler} 
            />
            <span>{name}</span>
            <input 
                type="button"
                value="Edit"
                onClick={editHandler}
                disabled={disable}
            />
            <input 
                type="button"
                value="Delete"
                onClick={DeleteHandler}
                disabled={disable}
            /> 
        </li>
    )
}

export default Todo;