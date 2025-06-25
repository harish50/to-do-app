import React, { createContext} from "react";
import type {Task} from "src/components/TaskItem.tsx";


type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType>({tasks: [], setTasks: ()=>{}});

export default TaskContext;