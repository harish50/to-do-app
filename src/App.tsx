import Header from "./components/Header.tsx";
import './App.css'
import {useState} from "react";
import TodoItem, {type Todo} from "./components/TodoItem.tsx";

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      title: "Lorem Ipsum ",
      createdAt: new Date().toDateString(),
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "Pending",
      id: "some-id"
    },
    {
      title: "Lorem Ipsum ",
      createdAt: new Date().toDateString(),
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "In Progress",
      id: "some-id"
    },
    {
      title: "Lorem Ipsum ",
      createdAt: new Date().toDateString(),
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "Completed",
      id: "some-id"
    }
  ]);

  return (
    <div className="max-w-md mx-auto pb-20">
      <Header title={"TO-DO APP"}/>
      <div className='p-3'>
        <input
          type="text"
          placeholder="🔍 Search To-Do"
          className="w-full border p-2 rounded mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {todos.map((item) => (
          <TodoItem todo={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default App
