import { useEffect, useState } from "react";
import useTodo from "../hooks/useTodo";


function Todo({todos, name, index, isDone, editIndex, setEditIndex, toggleIsDone, deleteTodo}){
    //Declaring the Todo hook
    const {
        done,
        onChangeHandler,
        editHandler,
        disable, 
        deleteHandler
    }=useTodo(todos, index, isDone, editIndex, setEditIndex, toggleIsDone, deleteTodo)
 

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
                onClick={deleteHandler}
                disabled={disable}
            /> 
        </li>
    )
}

export default Todo;