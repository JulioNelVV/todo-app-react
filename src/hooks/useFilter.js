import { useEffect, useRef, useState } from "react";
const useFilter=(currentCategory, setCurrentCategory, toggleIsVisible)=>{
    const [selectedValue, setSelectedValue]=useState(currentCategory)
    const selectCategory=useRef();
    const onChangeHandler=()=>{
        setSelectedValue(selectCategory.current.value)
    }
    useEffect(()=>{
        setCurrentCategory(selectedValue);
        toggleIsVisible(selectedValue);
    },[selectedValue])
    return{
        selectedValue,
        onChangeHandler,
        selectCategory
    }
}
export default useFilter;