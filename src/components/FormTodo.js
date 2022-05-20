
import useFormTodo from "../hooks/useFormTodo";
import "../styles/FormTodo.css"
/*
    This component allow us to enter the name of
    a to do item and add it to the list or editing
    the name of an existing item
*/
function FormTodo({todos,createTodo, editTodo, editIndex}){
    //Declaring custom hook FormTodo
    const {
        name,
        onChangeHandler,
        onSubmitHandler,
        submitValue,
        nameInput
    }=useFormTodo(todos,createTodo, editTodo, editIndex)
    
    return(
        <form
            className="form-todo"
            onSubmit={onSubmitHandler}
        >
            <input
                className="form-todo__text"
                type="text"
                placeholder={`${submitValue} a to do task`}
                value={name}
                onChange={onChangeHandler}
                ref={nameInput}
            />
            <input
                className={`form-todo__submit --${submitValue}`}
                type="submit"
            />
        </form>
    )
}

export default FormTodo;