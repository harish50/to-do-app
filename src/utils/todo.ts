export enum TaskStatus {
  Complete = "Completed",
  InProgress = "In Progress",
  Pending = "Pending"
}

export const statusOptions: { value: TaskStatus; label: string; color: string }[] = [
  {value: TaskStatus.Pending, label: "Pending", color: "bg-gray-400"},
  {value: TaskStatus.InProgress, label: "In Progress", color: "bg-yellow-400"},
  {value: TaskStatus.Complete, label: "Completed", color: "bg-green-600"},
];