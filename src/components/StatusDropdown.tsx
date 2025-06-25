import {useState} from "react";
import {statusOptions, TaskStatus} from "../utils/todo.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

type StatusDropdownProps = {
  selected: TaskStatus;
  onChange: (status: TaskStatus) => void;
}

const StatusDropdown = ({selected, onChange,}: StatusDropdownProps) => {
  const [open, setOpen] = useState(false);

  const current = statusOptions.find((s) => s.value === selected);

  return (
    <div className="relative">
      <button
        className="w-full border border-gray-400 px-4 py-2 rounded flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2 text-xs">
          <span className={`w-3 h-3 rounded-full ${current?.color}`}/>
          <span className="capitalize">{current?.label}</span>
        </div>
        <span>
          {open ?
            <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4 text-primary"/>
            : <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-primary"/>
          }
        </span>
      </button>

      {open && (
        <div className="absolute w-full mt-2 bg-white shadow rounded z-10 border border-gray-400 text-xs">
          {statusOptions.map((option) => (
            <div
              key={option.value}
              className={`flex items-center gap-2 px-4 py-2 h-10 cursor-pointer hover:bg-gray-100 ${
                selected === option.value ? "bg-gray-100" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <span className={`w-3 h-3 rounded-full ${option.color}`}/>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
