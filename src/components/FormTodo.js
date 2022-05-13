import { useEffect, useRef, useState } from "react";

function FormTodo({todos,updateTodos, editTodo, setEditTodo}){

    const [name, setName]=useState("");
    const [submitValue, setSubmitValue]=useState("Add")
    const nameInput=useRef();
    const onSubmitHandler=(e)=>{

        e.preventDefault();
        let newTodos;
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
            setSubmitValue("Add")
           
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
            setSubmitValue("Add")
        }
        nameInput.current.focus();
        
    }
    const onChangeHandler=(e)=>{
        setName(e.target.value)
    }
    
    useEffect(()=>{
        
        setName(editTodo.name)
        nameInput.current.focus();
        if(editTodo.name===""){
            setSubmitValue("Add");
        }else{
            setSubmitValue("Edit");
        }
        
        
    },[editTodo])
    
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