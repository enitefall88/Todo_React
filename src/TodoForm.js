import React, {useState} from "react"
import PT from "prop-types"

export default function TodoForm({createTodo}) {
  let [text, setText] = useState("")
  return <div className="form-inline">
    <input autoComplete="off"
           onChange={e => setText(e.target.value)}
           name="text"
           value={text}
           className="form-control"
    />
    <button type="button"
            onClick={_ => {
              createTodo({text})
              setText("")
            }}
            disabled={!text}
            className="btn btn-primary ml-2">
      Add
    </button>
  </div>
}

TodoForm.propTypes = {
  createTodo: PT.func.isRequired
}
