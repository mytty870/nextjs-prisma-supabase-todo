
'use server'
export const addTodo = async (formData: FormData) => {
  const title = formData.get('title') as string
  const completed = true
  await prisma.todo.create({data: {title, completed}})
}