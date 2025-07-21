import { Component } from "@angular/core";
import { TaskListComponent } from "../../shared/molecules/task-list/task-list";
import { Task } from "../../shared/models/task.model";
import { TaskStatus } from "../../shared/models/task.model";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: "./todo.html",
  styleUrl: "./todo.scss",
})
export class Todo {
  now = Date.now();
  tasks: Task[] = [
    {
      id: "1",
      name: "Learn Angular",
      status: TaskStatus.Completed,
      createdAt: this.now,
      updatedAt: this.now,
    },
    {
      id: "2",
      name: "Build a todo app",
      status: TaskStatus.Pending,
      createdAt: this.now - 86400000, // 1 day ago
      updatedAt: this.now - 86400000,
    },
    {
      id: "3",
      name: "Deploy to production",
      status: TaskStatus.Pending,
      description: "Deploy the app to production environment",
      createdAt: this.now - 172800000, // 2 days ago
      updatedAt: this.now - 172800000,
    },
  ];

  onTaskAdded(name: string, description?: string): void {
    const newTask: Task = {
      id: this.now.toString(),
      name,
      status: TaskStatus.Pending,
      description,
      createdAt: this.now,
      updatedAt: this.now,
    };
    this.tasks = [...this.tasks, newTask];
  }

  onTaskToggled(taskId: string): void {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status:
              task.status === TaskStatus.Completed
                ? TaskStatus.Pending
                : TaskStatus.Completed,
            updatedAt: this.now,
          }
        : task
    );
  }

  onTaskDeleted(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
