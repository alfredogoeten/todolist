import { Component, inject } from "@angular/core";
import { TaskListComponent } from "../../shared/organisms/task-list/task-list.component";
import { TaskInputComponent } from "../../shared/molecules/task-input/task-input.component";
import { TaskService } from "../../core/services/task.service";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [TaskListComponent, TaskInputComponent],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.scss",
})
export class TodoComponent {
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
