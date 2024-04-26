import prisma from "@/prisma/prisma"

export const TodoList = async() => {
  const todos = await prisma.todo.findMany()

  console.log(todos)


  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        )
      })}
    </div>
  )
}