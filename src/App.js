import React, {useState} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function App() {
  return <div className="p-3">
    <TodoForm/>
    <div className="mt-4">
      <TodoList/>
    </div>
  </div>
}

export default App;
