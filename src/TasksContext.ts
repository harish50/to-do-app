import React, { createContext} from "react";
import type {Task} from "./types/task.ts";


type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType>({tasks: [], setTasks: ()=>{}});

export default TaskContext;