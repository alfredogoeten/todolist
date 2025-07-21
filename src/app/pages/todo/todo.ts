import { Component, inject } from "@angular/core";
import { TaskListComponent } from "../../shared/organisms/task-list/task-list";
import { TaskService } from "../../core/services/task.service";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: "./todo.html",
  styleUrl: "./todo.scss",
})
export class Todo {
  private taskService = inject(TaskService);

  get taskList() {
    return this.taskService.tasks().tasks;
  }

  onTaskAdded(taskName: string): void {
    this.taskService.addTask(taskName);
  }

  onTaskToggled(taskId: string): void {
    this.taskService.toggleTask(taskId);
  }

  onTaskDeleted(taskId: string): void {
    this.taskService.deleteTask(taskId);
  }
}
