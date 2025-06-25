import {useNavigate, useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import TaskContext from "../TasksContext.ts";
import Header from "../components/Header.tsx";
import {TaskStatus} from "../components/TodoItem.tsx";
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

    const updated = tasks.map((task) =>
      task.id === id
        ? {...task, title, description, status}
        : task
    );

    setTasks(updated);
    navigate("/");
  };

  return (
    <div className="max-w-lvw mx-auto">
      <Header showBack title={"Edit Task"} />

      <div className="mt-6 space-y-4 p-2">
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <StatusDropdown selected={status} onChange={setStatus} />

        <div className="flex justify-between pt-4">
          <button
            onClick={() => navigate("/")}
            className="border border-blue-800 text-blue-800 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="bg-blue-800 text-white px-6 py-2 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
