import React, {useState} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

let initialTodos = [
  {done: false, text: "First"},
  {done: false, text: "Second"},
  {done: false, text: "Third"},
  {done: false, text: "Fourth"},
  {done: false, text: "Fifth"}
]

function App() {
  let [todos, setTodos] = useState(initialTodos)

  function createTodo({text}) {
    let todo = {text, done: false}
    setTodos([...todos, todo]
    )
  }
  
  function removeTodo(text) {
    setTodos(
        todos.filter(todo => todo.text != text)
    )
  }

  function toggleTodo(text) {
    setTodos(
      todos.map(
      todo => ({...todo, // destructuring, create a copy of each element and changing it if necessary
        done: todo.text == text ? !todo.done : todo.done})
      )
    )
  }

  return <div className="p-3">
    <TodoForm createTodo={createTodo} />
    <div className="mt-4">
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  </div>
}

export default App;
