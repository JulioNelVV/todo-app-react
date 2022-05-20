import useTodo from "../hooks/useTodo";
import "../styles/Todo.css"
/*
    This component show us the existing to do task and 
    let us to edit, delete and mark the task as done
*/
function Todo({todos, name, index, isDone, isVisible, editIndex, setEditIndex, toggleIsDone, deleteTodo, currentCategory, toggleIsVisible}){
    //Declaring the custom Todo hook
    const {
        isDoneHandler,
        editHandler,
        disable, 
        deleteHandler
    }=useTodo(todos, index, isDone, editIndex, setEditIndex, toggleIsDone, deleteTodo, currentCategory, toggleIsVisible)
 
    return(
        <li className={`todo ${isVisible?"--show":"--hide"} ${isDone?"--done":"--undone"}`}>          
            <span
                className="todo__name"
            >
                {name}
            </span>
            <input
                className="todo__button --checkbox"
                type="button"
                onClick={isDoneHandler} 
            />
            <input 
                className={`todo__button --edit ${disable?"--disable":"--able"}`}
                type="button"
                onClick={editHandler}
                disabled={disable}
            />
            <input 
                className={`todo__button --delete ${disable?"--disable":"--able"}`}
                type="button"
                onClick={deleteHandler}
                disabled={disable}
            /> 
        </li>
    )
}

export default Todo;