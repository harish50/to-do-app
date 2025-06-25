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
    <div className="max-w-lvw mx-auto">
      <Header title={"TO-DO APP"}/>
      <div className='p-3'>
        <input
          type="text"
          placeholder="🔍 Search To-Do"
          className="w-full border p-2 rounded mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {tasks.map((item) => (
          <TaskItem task={item} key={item.id}/>
        ))}
        {
          tasks.length === 0 &&
          <div className="text-center text-gray-500 py-10">
            <p className="text-xl mb-2">🎉 Nothing here!</p>
            <p>Add a new task to get started.</p>
          </div>
        }
      </div>
      <AddButton onClick={handleAdd}/>
    </div>
  )
}

export default Home
