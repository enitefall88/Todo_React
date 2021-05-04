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

  return <div className="p-3">
    <TodoForm createTodo={createTodo}/>
    <div className="mt-4">
      <TodoList todos={todos}/>
    </div>
  </div>
}

export default App;
