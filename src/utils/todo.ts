import {TaskStatus} from "../types/task.ts";

export const statusOptions: { value: TaskStatus; label: string; color: string }[] = [
  {value: TaskStatus.Pending, label: "Pending", color: "bg-gray-400"},
  {value: TaskStatus.InProgress, label: "In Progress", color: "bg-yellow-400"},
  {value: TaskStatus.Complete, label: "Completed", color: "bg-green-600"},
];

export const formatDate = (dateStr: string) =>{
  const date = new Date(dateStr);

  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  const year = date.getFullYear();

  return `${weekday} ${day}, ${month} ${year}`;
}