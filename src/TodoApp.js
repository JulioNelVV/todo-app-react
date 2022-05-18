import Todo from "./components/Todo.js";
import FormTodo from "./components/FormTodo.js"
import "./App.css"
import useTodoApp from "./hooks/useTodoApp.js";
import Filter from "./components/Filter.js"

function TodoApp() {
    //Declaring the global hook
    const {
        todos,
        createTodo,
        editTodo,
        toggleIsDone,
        deleteTodo,
        editIndex,
        setEditIndex,
        currentCategory,
        setCurrentCategory,
        toggleIsVisible,
        deleteCategory
        
    }=useTodoApp();

    return(
        
        <div className="App">
            <h1>To do App</h1>
            <Filter 
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                toggleIsVisible={toggleIsVisible}
            />
            <FormTodo
                todos={todos}
                createTodo={createTodo}
                editTodo={editTodo}
                editIndex={editIndex}
            />
            <ul>
                {
                    todos.length===0
                    ?
                    <li>There's no pending to do tasks</li>
                    :
                    (
                        todos.every((todo)=>todo.isVisible===false)
                        ?
                        <li>The {currentCategory} category is empty</li>
                        :
                        todos.map((todo, index)=>{

                            return(
                                <Todo
                                    todos={todos}
                                    key={`${todo.name}-${index}-${String(todo.isDone)}}`}
                                    index={index}
                                    name={todo.name}
                                    isDone={todo.isDone}
                                    isVisible={todo.isVisible}
                                    editIndex={editIndex}
                                    setEditIndex={setEditIndex}
                                    deleteTodo={deleteTodo}
                                    toggleIsDone={toggleIsDone}
                                    currentCategory={currentCategory}
                                    toggleIsVisible={toggleIsVisible}
                                />
                            )
                        })
                    )
                    
                }
            </ul>
            <input
                type="button"
                value={`Delete ${currentCategory}`} 
                onClick={deleteCategory}
            />
        </div>
     
  )
}
export default TodoApp;
