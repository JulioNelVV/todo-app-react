import Todo from "./components/Todo.js";
import FormTodo from "./components/FormTodo.js"
import "./App.css"
import useTodoApp from "./hooks/useTodoApp.js";

function TodoApp() {
    //Declaring the global hook
    const {
        todos,
        createTodo,
        editTodo,
        toggleIsDone,
        deleteTodo,
        editIndex,
        setEditIndex
    }=useTodoApp();
   
    return(
        
        <div className="App">
            <h1>Todo App</h1>
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
                    todos.map((todo, index)=>{
                        return(
                            <Todo
                                todos={todos}
                                key={index}
                                index={index}
                                name={todo.name}
                                isDone={todo.isDone}
                                editIndex={editIndex}
                                setEditIndex={setEditIndex}
                                deleteTodo={deleteTodo}
                                toggleIsDone={toggleIsDone}
                            />
                        )
                    })
                }
            </ul>
        </div>
     
  )
}
export default TodoApp;
