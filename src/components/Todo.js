import { useEffect, useState } from "react";


function Todo({todos, editTodo, name, index, isDone}){
    const [done, setDone]=useState(false)
    let newTodos=[...todos];
    newTodos[index].isDone=done;

    const onChangeHandler=()=>{
        setDone(!done)
        editTodo(newTodos)
    }
    const DeleteHandler=()=>{
        let result=newTodos.filter((todo,pos)=>pos!==index)
        editTodo(result)
    }
    
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
            />
            <input 
                type="button"
                value="Delete"
                onClick={DeleteHandler}
            /> 
        </li>
    )
}

export default Todo;