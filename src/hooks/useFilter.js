import { useEffect, useRef, useState } from "react";

const useFilter=(currentCategory, setCurrentCategory, toggleIsVisible)=>{
    //Declaring the local hooks
    const [selectedValue, setSelectedValue]=useState(currentCategory)
    const selectCategory=useRef();
    //The handlers
    const onChangeHandler=()=>{
        setSelectedValue(selectCategory.current.value)
    }
    /*
        Every time the value of the select tag changes
        the currentCategory state takes that value and
        the to do item that belongs to that category
        are shown
    */
    useEffect(()=>{
        setCurrentCategory(selectedValue);
        toggleIsVisible(selectedValue);
    },[selectedValue])
    //The values that are needed to render the component
    return{
        selectedValue,
        onChangeHandler,
        selectCategory
    }
}
export default useFilter;