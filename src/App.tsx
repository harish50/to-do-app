import './App.css'
import {Route, Routes} from "react-router";
import AddTodo from "./pages/AddTodo.tsx";
import Home from "./pages/Home.tsx";
import TaskContext from "./TasksContext.ts";
import {useState} from "react";
import type {Todo} from "./components/TodoItem.tsx";

function App() {
  const [tasks, setTasks] = useState<Todo[]>([]);

  return (
    <TaskContext value={{tasks, setTasks}}>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="add-todo" element={<AddTodo/>}/>
      </Routes>
    </TaskContext>
  )
}

export default App
