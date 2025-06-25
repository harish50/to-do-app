import {useState} from "react";
import TaskItem, {type Task} from "./TaskItem";
import type {TaskStatus} from "../utils/todo";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface SectionProps {
  title: string;
  status: TaskStatus;
  defaultOpen?: boolean;
  tasks: Task[];
}

const Section = ({title, status, defaultOpen = false, tasks}: SectionProps) => {
  const [expanded, setExpanded] = useState(defaultOpen);
  const filtered = tasks.filter((task) => task.status === status);

  return (
    <div className="mb-4">
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="flex justify-between items-center w-full bg-gray-100 px-4 py-2 rounded text-left text-xs h-9 cursor-pointer"
      >
        <span>
          {title} (<b>{filtered.length}</b>)
        </span>
        <span>{expanded ?
          <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4 text-primary"/>
          : <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-primary"/>}
        </span>
      </button>

      {
        expanded &&
        (
          <div className="mt-2">
            {filtered.map((task) => (
              <TaskItem key={task.id} task={task}/>
            ))}

            {filtered.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                <p className="text-xl">🎉 No tasks here</p>
              </div>
            )}
          </div>
        )
      }
    </div>
  )
    ;
};

export default Section;
