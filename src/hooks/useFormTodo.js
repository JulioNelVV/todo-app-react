import { useEffect, useRef, useState } from "react";

const useFormTodo=(todos,createTodo, editTodo, editIndex)=>{
    const [name, setName]=useState("");
    const [submitValue, setSubmitValue]=useState("add")
    const nameInput=useRef();
    const newTodos=[...todos];
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if(name===""||name===undefined)return;

        if(editIndex===-1){
            const newTodo={
                name: name,
                isDone: false,
                isVisible: true,
            }
            createTodo(newTodos,newTodo)
        }else{
            editTodo(newTodos,editIndex,name)
        }

        nameInput.current.focus();
        setName("");
        setSubmitValue("add")
    }

    const onChangeHandler=()=>{
        setName(nameInput.current.value)
    }
    
    useEffect(()=>{
        if(editIndex===-1){
            setName("")
            setSubmitValue("add");
        }else{
            
            setName(newTodos[editIndex].name)
            setSubmitValue("edit");
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