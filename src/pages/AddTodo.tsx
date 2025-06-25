import {useNavigate} from "react-router";
import React, {useContext, useState} from "react";
import type {Todo} from "../components/TodoItem.tsx";
import Header from "../components/Header.tsx";
import {v4 as uuidv4} from "uuid";
import TaskContext from "../TasksContext.ts";

const AddTodo: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {tasks, setTasks} = useContext(TaskContext);

  const handleAdd = () => {
    if (!title.trim()) return;
    const newTask: Todo = {
      id: uuidv4(),
      title,
      description,
      status: "Pending",
      createdAt: new Date().toDateString(),
    };
    const updated = [newTask, ...tasks];
    setTasks(updated)
    navigate("/");
  };

  return (
    <div className="max-w-lvw mx-auto">
      <Header title={"Add Task"} showBack/>
      <div className='p-2'>
        <input
          type="text"
          placeholder="Enter the title"
          className="w-full border border-gray-400 p-2 rounded mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter the description"
          className="w-full border border-gray-400 p-2 rounded mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex mt-6 justify-between">
        <button
          className=" bg-white text-blue-700 border-2 px-6 border-blue-700 py-2 rounded"
          onClick={handleAdd}
        >
          Cancel
        </button>
        <button
          className=" bg-blue-800 text-white px-6 rounded"
          onClick={handleAdd}
        >
          Add Task
        </button>
      </div>
    </div>
  )
};

export default AddTodo;