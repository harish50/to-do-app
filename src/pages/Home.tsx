import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import TaskContext from "../TasksContext.ts";
import Header from "../components/Header.tsx";
import AddButton from "../components/AddButton.tsx";
import {type Task} from "../components/TaskItem.tsx";
import Section from "../components/Section.tsx";
import {TaskStatus} from "../utils/todo.ts";

function Home() {
  const [search, setSearch] = useState("");
  const {tasks} = useContext(TaskContext)
  const navigate = useNavigate();

  const filteredTasks = tasks.filter(
    (task: Task) =>
      task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search)
  );
  const handleAdd = () => {
    navigate("/add-todo")
  }

  return (
    <div className="max-w-5xl mx-auto h-[100dvh] bg-white flex flex-col relative">
      <Header title={"TO-DO APP"}/>
      <div className="p-3">
        <input
          type="text"
          name="search"
          placeholder="🔍 Search To-Do"
          className="w-full border border-gray-400 p-2 rounded text-xs h-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex-grow overflow-y-auto p-3 pb-24 bg-white">
        <Section title="In Progress" status={TaskStatus.InProgress} tasks={filteredTasks} defaultOpen/>
        <Section title="Pending" status={TaskStatus.Pending} tasks={filteredTasks}/>
        <Section title="Completed" status={TaskStatus.Complete} tasks={filteredTasks}/>
      </div>
      <div className="absolute bottom-4 right-4">
        <AddButton onClick={handleAdd}/>
      </div>
    </div>
  )
}

export default Home
