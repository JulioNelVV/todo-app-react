import { useEffect, useRef, useState } from "react";

const useFilter=(todos, toggleIsVisible)=>{
    const [filterValue, setFilterValue]=useState("All");
    const selectValue=useRef();
    const newTodos=[...todos];
    const onChangeHandler=()=>{
        setFilterValue(selectValue.current.value)
    }
    useEffect(()=>{
        toggleIsVisible(newTodos, filterValue);    
    },[filterValue])
    return{
        filterValue,
        onChangeHandler,
        selectValue
    }
}
export default useFilter;