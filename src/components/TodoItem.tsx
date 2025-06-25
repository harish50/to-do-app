import {useNavigate} from "react-router";
import {statusOptions} from "./StatusDropdown.tsx";

export enum TaskStatus {
  Complete = "Completed",
  InProgress = "In Progress",
  Pending = "Pending"
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: TaskStatus
}

interface TotoItemProps {
  todo: Todo
}

const TodoItem = ({todo}: TotoItemProps) => {
  const navigate = useNavigate();

  const statusColor = statusOptions.find((s) => s.value === todo.status)?.color;

  const handleEdit = () => {
    navigate(`edit/${todo.id}`)
  }

  return(
    <div className="p-4 border-b">
      <div className="flex-col">
        <div className="flex justify-between gap-2">
          <div className="text-blue-800 text-sm font-bold">{todo.title}</div>
          <div className="text-xs text-gray-700 flex items-center gap-1 ">
            <span className={"w-2.5 h-2.5 rounded-full inline-block "+statusColor}></span>
            <span className="capitalize">{todo.status}</span>
          </div>
        </div>
        <div className="text-xs text-gray-600">{todo.description}</div>
        <div className="flex justify-between gap-2 text-[10px]">
          <div className="text-gray-400 mt-1">{todo.createdAt}</div>
          <div className="flex gap-2">
            <button className="text-gray-700 flex items-center gap-1" onClick={handleEdit}>Edit</button>
            <button className="text-gray-700 flex items-center gap-1">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;