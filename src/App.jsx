import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"

export default function App() {
  const [todos, setTodos] = useState([])
  // setNewItem("sdfsdf")
  
  function addTodo(title) {
    setTodos((currentTodos) => {
        return [
            ...currentTodos,
            {
                id: crypto.randomUUID(), title: newItem, completed:
                    false
            },
        ]

    })
  }


  function ToggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function delteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  console.log(todos);
  return (
    <>
  <NewTodoForm onSubmit={addTodo}/>
  <h1 className="header"> Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return <li key={todo.id}>
        <label>
          <input type="checkbox" checked= {todo.
            completed}  onChange={e => ToggleTodo(todo.id, e.target)}/>
         {todo.title}
        </label>
        <button onClick ={() => delteTodo(todo.id)}className="btn btn-danger">Delete</button>
      </li>
    })}
   
  </ul>
    </>
  
  )
}
