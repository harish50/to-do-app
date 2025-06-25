import Header from "../components/Header.tsx";
import {useContext, useState} from "react";
import TaskItem from "../components/TaskItem.tsx";
import AddButton from "../components/AddButton.tsx";
import {useNavigate} from "react-router";
import TaskContext from "../TasksContext.ts";

function Home() {
  const [search, setSearch] = useState("");
  const {tasks} = useContext(TaskContext)
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/add-todo")
  }

  return (
    <div className="max-w-5xl mx-auto h-[100dvh] bg-white flex flex-col relative">
      <Header title={"TO-DO APP"} />
      <div className="p-3">
        <input
          type="text"
          placeholder="🔍 Search To-Do"
          className="w-full border border-gray-400 p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex-grow overflow-y-auto p-3 pb-24 bg-white">
        {tasks.map((item) => (
          <TaskItem task={item} key={item.id} />
        ))}

        {tasks.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            <p className="text-xl mb-2">🎉 Nothing here!</p>
            <p>Add a new task to get started.</p>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 right-4">
        <AddButton onClick={handleAdd} />
      </div>
    </div>
  )
}

export default Home
