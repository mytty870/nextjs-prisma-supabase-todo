
'use server'

import { revalidatePath } from "next/cache"

export const addTodo = async (formData: FormData) => {
  const title = formData.get('title') as string
  await prisma.todo.create({data: {title}})
  revalidatePath('/')
}

export const deleteTodo = async (id: number) => {
  console.log(id)
  await prisma.todo.delete({
    where: {id}
  })
  revalidatePath('/')
}

// updateTodoStatus の方が良いのでは？
export const updateTodoStatus = async (id: number, status: boolean) => {
  await prisma.todo.update({
    where: {id},
    data: {completed: !status}
  })
  revalidatePath('/')
}