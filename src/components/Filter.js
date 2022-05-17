import { useEffect, useRef, useState } from "react";
import useFilter from "../hooks/useFilter.js"
function Filter({currentCategory, setCurrentCategory, toggleIsVisible}){
    const {
        selectedValue,
        onChangeHandler,
        selectCategory
    }=useFilter(currentCategory, setCurrentCategory, toggleIsVisible)
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