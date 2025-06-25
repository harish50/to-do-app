import './App.css'
import {Route, Routes} from "react-router";
import AddTask from "./pages/AddTask.tsx";
import Home from "./pages/Home.tsx";
import TaskContext from "./TasksContext.ts";
import {useEffect, useState} from "react";
import EditTask from "./pages/EditTask.tsx";
import type {Task} from "./types/task.ts";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const items = localStorage.getItem("todo-items");
    if (items) {
      return JSON.parse(items);
    }
    return []
  });

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(tasks));
  }, [tasks])

  return (
    <TaskContext value={{tasks, setTasks}}>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="add-todo" element={<AddTask/>}/>
        <Route path="/edit/:id" element={<EditTask/>}/>
      </Routes>
    </TaskContext>
  )
}

export default App
