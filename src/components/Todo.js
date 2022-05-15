import { useEffect, useState } from "react";
import useTodo from "../hooks/useTodo";
import "../styles/Todo.css"

function Todo({todos, name, index, isDone, isVisible, editIndex, setEditIndex, toggleIsDone, deleteTodo}){
    //Declaring the Todo hook
    const {
        done,
        onChangeHandler,
        editHandler,
        disable, 
        deleteHandler
    }=useTodo(todos, index, isDone, editIndex, setEditIndex, toggleIsDone, deleteTodo)
 

    return(
        <li className={isVisible?"show":"hide"}>
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