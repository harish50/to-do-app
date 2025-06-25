export enum TaskStatus {
  Complete = "Completed",
  InProgress = "In Progress",
  Pending = "Pending"
}

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: TaskStatus
}