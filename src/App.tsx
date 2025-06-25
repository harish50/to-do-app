import './App.css'
import {Route, Routes} from "react-router";
import AddTask from "./pages/AddTask.tsx";
import Home from "./pages/Home.tsx";
import TaskContext from "./TasksContext.ts";
import {useState} from "react";
import type {Task} from "./components/TaskItem.tsx";
import EditTask from "./pages/EditTask.tsx";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext value={{tasks, setTasks}}>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="add-todo" element={<AddTask/>}/>
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </TaskContext>
  )
}

export default App
