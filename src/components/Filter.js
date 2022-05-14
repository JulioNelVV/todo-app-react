import { useEffect, useState } from "react";

function Filter(){
    const [filterValue, setFilterValue]=useState("All");
    const onChangeHandler=(e)=>{
        setFilterValue(e.target.value)
       
    }
    useEffect(()=>{
        
    },[filterValue])
    return(
        <div>
            <label>Show: </label>
            <select
                value={filterValue}
                onChange={onChangeHandler}
            >
                <option>All</option>
                <option>In progress</option>
                <option>Done</option>
            </select>
        </div>
    )
}
export default Filter;