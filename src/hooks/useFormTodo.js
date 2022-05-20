import { useEffect, useRef, useState } from "react";

const useFormTodo=(todos,createTodo, editTodo, editIndex)=>{
    //Declaring the local hooks
    /*
      This hook control the name of the item that is entered
      by the input tag
    */
    const [name, setName]=useState("");
    /*
        This hook controls the appearence of the submit button
        and let us know if we are adding or editing an element
    */
    const [submitValue, setSubmitValue]=useState("add")
    const nameInput=useRef();
    /*
        We save the value of the todo list that arrives 
        for props in a new variable
    */
    const newTodos=[...todos];
    
    //The submit handler allow us to add or edit an item
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        //if the input value is empty won't do anything
        if(name===""||name===undefined)return;
 
        /*
            If we are adding or editing an item the new name 
            will be the value of the name state if the global state
            editIndex has a value equals to -1 means that
            none of the items has been selected for editing, other
            value will be the index of the element in the list
        */
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
        /*
            for both cases we focus the input, set the name state to ""
            and go back to the add state of the submit button
        */
        nameInput.current.focus();
        setName("");
        setSubmitValue("add")
    }

    const onChangeHandler=()=>{
        setName(nameInput.current.value)
    }
    
    /*
     If the global state edit index change it that we are
     toggling an edit mode 
    */
    useEffect(()=>{
        //Reseting the name state if the element has been edited
        if(editIndex===-1){
            setName("")
            setSubmitValue("add");
        }else{
            /*
                Set the value of the name state with the name of
                the item that will be edited
            */
            setName(newTodos[editIndex].name)
            setSubmitValue("edit");
        }
        nameInput.current.focus();
    },[editIndex])

    //Return the variables needed for rendering
    return{
        name,
        onChangeHandler,
        onSubmitHandler,
        submitValue,
        nameInput
    }
}
export default useFormTodo;