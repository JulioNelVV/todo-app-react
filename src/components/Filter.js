import { useEffect, useRef, useState } from "react";
import useFilter from "../hooks/useFilter.js";

function Filter({todos, toggleIsVisible}){
    const {
        filterValue,
        onChangeHandler,
        selectValue
   }=useFilter(todos, toggleIsVisible)
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