
import useFormTodo from "../hooks/useFormTodo";

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
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="Add todo"
                value={name}
                onChange={onChangeHandler}
                ref={nameInput}
                />
            <input type="submit" value={submitValue}/>
        </form>
    )
}

export default FormTodo;