import {useNavigate} from "react-router";
import React, {useContext, useState} from "react";
import {type Task} from "../components/TaskItem.tsx";
import Header from "../components/Header.tsx";
import {v4 as uuidv4} from "uuid";
import TaskContext from "../TasksContext.ts";
import {TaskStatus} from "../utils/todo.ts";

const AddTask: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {tasks, setTasks} = useContext(TaskContext);

  const handleAdd = () => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.Pending,
      createdAt: new Date().toISOString(),
    };
    const updated = [newTask, ...tasks];
    setTasks(updated)
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto h-[100dvh] bg-white">
      <Header title={"Add Task"} showBack/>
      <div className='p-5 space-y-4 mt-4'>
        <input
          type="text"
          placeholder="Enter the title"
          className="w-full border border-gray-400 p-2 rounded text-xs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter the description"
          rows={3}
          className="w-full border border-gray-400 p-2 rounded resize-none text-xs"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-between pt-4">
          <button
            onClick={() => navigate("/")}
            className="border border-primary text-primary px-7 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-primary text-white px-10 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
};

export default AddTask;