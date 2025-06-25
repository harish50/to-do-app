import React, { createContext} from "react";
import type {Todo} from "./components/TodoItem.tsx";


type TaskContextType = {
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskContext = createContext<TaskContextType>({tasks: [], setTasks: ()=>{}});

export default TaskContext;