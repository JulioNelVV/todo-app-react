import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";

function FormTodo({todos,createTodo}){

    const [name, setName]=useState("");
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if(name===""||name===undefined)return;
        let newTodo={
            index:todos.length,
            name: name,
            isDone: false
        }
        let newTodos=[...todos,newTodo]
        createTodo(newTodos)
    }
    const onChangeHandler=(e)=>{
        setName(e.target.value)
    }
    useEffect(()=>{
        setName("")
    },[todos])
    return(
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="Add todo"
                value={name}
                onChange={onChangeHandler}
                />
            <input type="submit" value="Add"/>
            
        </form>
    )
}

export default FormTodo;