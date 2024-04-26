import { CreateForm } from "./components/ create-form";
import { TodoList } from "./components/todo-list";

export default function Home() {
  return (
    <div className="m-20">
     <CreateForm />
     <TodoList />
    </div>
  );
}
