import { useEffect, useRef, useState } from "react";

const useFormTodo=(todos,createTodo, editTodo, editIndex)=>{
    const [name, setName]=useState("");
    const [submitValue, setSubmitValue]=useState("Add")
    const nameInput=useRef();
    const newTodos=[...todos];
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if(name===""||name===undefined)return;

        if(editIndex===-1){
            const newTodo={
                name: name,
                isDone: false,
            }
            createTodo(newTodos,newTodo)
        }else{
            editTodo(newTodos,editIndex,name)
        }

        nameInput.current.focus();
        setName("");
        setSubmitValue("Add")
    }

    const onChangeHandler=()=>{
        setName(nameInput.current.value)
    }
    
    useEffect(()=>{
        if(editIndex===-1){
            setName("")
            setSubmitValue("Add");
        }else{
            
            setName(newTodos[editIndex].name)
            setSubmitValue("Edit");
        }
        nameInput.current.focus();
    },[editIndex])

    return{
        name,
        onChangeHandler,
        onSubmitHandler,
        submitValue,
        nameInput
    }
}
export default useFormTodo;