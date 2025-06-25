import {useNavigate} from "react-router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import {formatDate, statusOptions, type TaskStatus} from "../utils/todo.ts";
import TaskContext from "../TasksContext.ts";
import {useContext} from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: TaskStatus
}

interface TotoItemProps {
  task: Task
}

const TaskItem = ({task}: TotoItemProps) => {
  const navigate = useNavigate();
  const {setTasks} = useContext(TaskContext);

  const statusColor = statusOptions.find((s) => s.value === task.status)?.color;

  const handleEdit = () => {
    navigate(`edit/${task.id}`)
  }

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
    }
  };

  return (
    <div className="p-4 border-b border-gray-400 group">
      <div className="flex-col">
        <div className="flex justify-between gap-2">
          <div className="text-primary text-sm font-bold">{task.title}</div>
          <div className="text-xs text-gray-700 flex items-center gap-1 ">
            <span className={"w-2.5 h-2.5 rounded-full inline-block " + statusColor}></span>
            <span className="capitalize">{task.status}</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 whitespace-pre-line">{task.description}</p>
        <div className="flex justify-between gap-2 text-[10px]">
          <div className="text-gray-400 mt-1">{formatDate(task.createdAt)}</div>
          <div
            className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
            <button className="text-primary  text-xs" onClick={handleEdit}>
              <FontAwesomeIcon icon={faPen} className="w-4 h-4"/>
            </button>
            <button className="text-red-600 text-xs" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} className="w-4 h-4"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;