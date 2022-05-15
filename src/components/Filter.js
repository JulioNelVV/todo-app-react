import { useEffect, useRef, useState } from "react";

function Filter({todos, toggleIsVisible}){
    const [filterValue, setFilterValue]=useState("All");
    const selectValue=useRef();
    const newTodos=[...todos];
    const onChangeHandler=()=>{
        setFilterValue(selectValue.current.value)
    }
    useEffect(()=>{
        toggleIsVisible(newTodos, filterValue);    
    },[filterValue])
    return(
        <div>
            <label>Show: </label>
            <select
                value={filterValue}
                onChange={onChangeHandler}
                ref={selectValue}
            >
                <option>All</option>
                <option>In progress</option>
                <option>Done</option>
            </select>
        </div>
    )
}
export default Filter;