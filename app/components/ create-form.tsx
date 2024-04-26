import { addTodo } from "../actions/action"

export const  CreateForm = () => {

  return (
    <>
      <form action={addTodo}>
        <div className="flex items-center w-full mb-3">
      <label htmlFor="create_todo" className="hidden">Todo作成フォーム</label>
      <input required placeholder="todo名" type="text" id="create_todo" name="title" title="create todo form" className="max-w-sm mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-3 cursor-not-allowed m-4" defaultValue="" />
      <button
        type="submit"
      className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
      >
        追加
      </button>
      </div>
      </form>

      
    </>
  )
}