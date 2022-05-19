import { useEffect, useRef, useState } from "react";
import useFilter from "../hooks/useFilter.js"
import "../styles/Filter.css"
function Filter({currentCategory, setCurrentCategory, toggleIsVisible}){
    const {
        selectedValue,
        onChangeHandler,
        selectCategory
    }=useFilter(currentCategory, setCurrentCategory, toggleIsVisible)
    return(
        <div className="filter">
            <label className="filter__label">Show: </label>
            <select
                className="filter__select"
                value={selectedValue}
                onChange={onChangeHandler}
                ref={selectCategory}
            >
                <option className="filter__option">All</option>
                <option>In progress</option>
                <option>Done</option>
            </select>
            
        </div>
    )
}
export default Filter;