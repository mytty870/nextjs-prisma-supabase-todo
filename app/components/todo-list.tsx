import prisma from "@/prisma/prisma"
import { DeleteTodo } from "./deleteTodo"
import { UpdateTodoStatus } from "./UpdateTodoStatus"

export const TodoList = async() => {
  // const todos = await prisma.todo.findMany()
  // const todos = await prisma.todo.findMany({where: {completed: false}, orderBy: [{updated_at: "desc"}]})
  // const todos = await prisma.todo.findMany({orderBy: [{updated_at: "desc"}]})

  const todos = await prisma.todo.findMany({orderBy: [{created_at: "desc"}]})

  // const completedTodos = await prisma.todo.findMany({where: {completed: true}})

  return (
    <div className="space-y-5">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-between items-center p-3 bg-white rounded-lg">
            <label className="flex gap-3 items-center">
              {/* <input type="checkbox" className="size-4" /> */}
              <UpdateTodoStatus id={todo.id} status={todo.completed}  />
              <span className={todo.completed ? "text-gray-400 line-through decoration-2" : ""}>{todo.title}</span>
            </label>
            {/* <button className="px-3 py-1 text-sm font-medium text-white bg-rose-600 rounded-lg cursor-pointer hover:bg-red-700 focus:ring-4 focus:ring-rose-300">
              削除
            </button> */}
            <DeleteTodo id={todo.id} />
          </div>
        )
      })}
    </div>
  )
}