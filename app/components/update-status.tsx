'use client'

import { updateStatus } from "../actions/action"

export const UpdateStatus = ({id, status: todoStatus} : {id: number, status: boolean}) => {
  return (
    // <form action={updateStatusWithId}>
      <input type="checkbox" id={`todo-${id}`} defaultChecked={todoStatus} value={todoStatus ? "true": "false"}
       onChange={async() => {
      await updateStatus(id, todoStatus)
 }}
      />
    // </form>
  )
}
