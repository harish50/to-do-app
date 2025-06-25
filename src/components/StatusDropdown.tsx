import {useState} from "react";
import {TaskStatus} from "../components/TodoItem.tsx";


export const statusOptions: { value: TaskStatus; label: string; color: string }[] = [
  {value: TaskStatus.Pending, label: "Pending", color: "bg-gray-400"},
  {value: TaskStatus.InProgress, label: "In Progress", color: "bg-yellow-400"},
  {value: TaskStatus.Complete, label: "Completed", color: "bg-green-600"},
];

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
        className="w-full border p-2 rounded flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${current?.color}`}/>
          <span className="capitalize">{current?.label}</span>
        </div>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute w-full mt-1 bg-white shadow rounded z-10 border">
          {statusOptions.map((option) => (
            <div
              key={option.value}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
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
