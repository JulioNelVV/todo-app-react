
import useTodo from "../hooks/useTodo";
import "../styles/Todo.css"

function Todo({todos, name, index, isDone, isVisible, editIndex, setEditIndex, toggleIsDone, deleteTodo, currentCategory, toggleIsVisible}){
    //Declaring the Todo hook
    const {
        done,
        isDoneHandler,
        editHandler,
        disable, 
        deleteHandler
    }=useTodo(todos, index, isDone, editIndex, setEditIndex, toggleIsDone, deleteTodo, currentCategory, toggleIsVisible)
 

    return(
        <li className={`todo ${isVisible?"show":"hide"} ${isDone?"done":"undone"}`}>
           
            <span
                className="todo__name"
            >
                {name}
            </span>
            <input
                type="button"
                onClick={isDoneHandler} 
                className="todo__button --checkbox"
            />
            <input 
                type="button"
                onClick={editHandler}
                disabled={disable}
                className={`todo__button --edit ${disable?"--disable":"--able"}`}
            />
            <input 
                type="button"
                onClick={deleteHandler}
                disabled={disable}
                className={`todo__button --delete ${disable?"--disable":"--able"}`}
            /> 
        </li>
    )
}

export default Todo;