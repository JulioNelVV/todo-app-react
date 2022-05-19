
import useFormTodo from "../hooks/useFormTodo";
import "../styles/FormTodo.css"
function FormTodo({todos,createTodo, editTodo, editIndex}){
    //Declaring FormTodo hook
    const {
        name,
        onChangeHandler,
        onSubmitHandler,
        submitValue,
        nameInput
    }=useFormTodo(todos,createTodo, editTodo, editIndex)
    
    
    return(
        <form
            onSubmit={onSubmitHandler}
            className="form-todo">
            <input
                type="text"
                placeholder={`${submitValue} a to do task`}
                value={name}
                onChange={onChangeHandler}
                ref={nameInput}
                className="form-todo__text"
                />
            <input
                type="submit"
                
                className={`form-todo__submit ${submitValue}`}
            />
 
        </form>
    )
}

export default FormTodo;