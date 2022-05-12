import { useEffect, useState } from "react";

function FormTodo({todos,updateTodos, editTodo, setEditTodo}){

    const [name, setName]=useState("");
    
    const onSubmitHandler=(e)=>{

        e.preventDefault();
        let newTodo, newTodos;
        newTodos=[...todos]
        if(name===""||name===undefined)return;
        if(editTodo.name===""){
            let newTodo={
                index:todos.length,
                name: name,
                isDone: false
            }
            
            updateTodos([...newTodos,newTodo])
            setName("");
        }else{
            
            newTodos[editTodo.index]={
                index: editTodo.index,
                name: name,
                isDone: editTodo.isDone
            };
            updateTodos(newTodos)
            setEditTodo({
                index: -1,
                name: "",
                isDone: false
            })
            setName("");
        }
        
        
    }
    const onChangeHandler=(e)=>{
        setName(e.target.value)
    }
    
    useEffect(()=>{
        setName(editTodo.name)
    },[editTodo])
    
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