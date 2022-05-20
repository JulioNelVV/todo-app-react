import useFilter from "../hooks/useFilter.js"
import "../styles/Filter.css"
/*
    This component allow us to select a category 
    and the to do items that belongs to it will be shown
*/
function Filter({currentCategory, setCurrentCategory, toggleIsVisible}){
    //Declare the custom hook useFilter
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
                <option className="filter__option">In progress</option>
                <option className="filter__option">Done</option>
            </select>
            
        </div>
    )
}
export default Filter;