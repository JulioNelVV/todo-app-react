import { useEffect, useRef, useState } from "react";

function Filter({currentCategory, setCurrentCategory, toggleIsVisible}){
    const [selectedValue, setSelectedValue]=useState(currentCategory)
    const selectCategory=useRef();
    const onChangeHandler=()=>{
        setSelectedValue(selectCategory.current.value)
    }
    useEffect(()=>{
        setCurrentCategory(selectedValue);
        toggleIsVisible(selectedValue)
    },[selectedValue])
    return(
        <div>
            <label>Show: </label>
            <select
                value={selectedValue}
                onChange={onChangeHandler}
                ref={selectCategory}
            >
                <option>All</option>
                <option>In progress</option>
                <option>Done</option>
            </select>
            
        </div>
    )
}
export default Filter;