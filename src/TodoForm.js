import React from "react"

export default function TodoForm() {
  return <div className="form-inline">
    <input autoComplete="off"
           name="text"
           value={""}
           className="form-control"
    />
    <button type="button"
            disabled={true}
            className="btn btn-primary ml-2">
      Add
    </button>
  </div>
}
