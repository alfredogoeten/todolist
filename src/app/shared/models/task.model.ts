export enum TaskStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
}

export enum TaskFilter {
  All = "ALL",
  Active = "ACTIVE",
  Completed = "COMPLETED",
}

export interface Task {
  id: string;
  name: string;
  status: TaskStatus;
}

export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
}

export const initialTaskState: TaskState = {
  tasks: [],
  filter: TaskFilter.All,
};
