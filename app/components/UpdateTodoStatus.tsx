'use client'

import { updateTodoStatus } from "../actions/action"

export const UpdateTodoStatus = ({id, status}: {id: number, status: boolean}) => {
  return (
    <input
    type="checkbox"
    className="size-4"
    onChange={
      async () => {
        await updateTodoStatus(id, status)
      }
    }
    defaultChecked={status}
    />
  )
}
