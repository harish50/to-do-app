import {useNavigate, useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import TaskContext from "../TasksContext.ts";
import Header from "../components/Header.tsx";
import {TaskStatus} from "../utils/todo.ts";
import StatusDropdown from "../components/StatusDropdown.tsx";

const EditTask = () => {
  const navigate = useNavigate();
  const {id} = useParams<{ id: string }>();
  const {tasks, setTasks} = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.Pending);

  useEffect(() => {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      navigate("/");
      return;
    }
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
  }, [id, tasks, navigate]);

  const handleUpdate = () => {
    if (!title.trim()) return;

    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {...task, title, description, status}
        : task
    );

    setTasks(updatedTasks);
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto h-[100dvh] bg-white">
      <Header showBack title={"Edit Task"} />

      <div className="mt-4 space-y-4 p-5">
        <input
          type="text"
          className="w-full border border-gray-400 p-2 rounded text-xs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={3}
          className="w-full border border-gray-400 p-2 rounded text-xs resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <StatusDropdown selected={status} onChange={setStatus} />
        <div className="flex justify-between pt-4">
          <button
            onClick={() => navigate("/")}
            className="border border-primary text-primary px-7 py-2 rounded cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="bg-primary text-white px-8 py-2 rounded cursor-pointer"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
