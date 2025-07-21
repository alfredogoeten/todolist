import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TaskItemComponent } from "../../molecules/task-item/task-item.component";
import { TaskInputComponent } from "../../molecules/task-input/task-input.component";
import { Task } from "../../models/task.model";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [TaskItemComponent, TaskInputComponent],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.scss",
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  @Output() taskAdded = new EventEmitter<string>();
  @Output() taskToggled = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();

  onAddTask(taskName: string): void {
    this.taskAdded.emit(taskName);
  }

  onToggleTask(taskId: string): void {
    this.taskToggled.emit(taskId);
  }

  onDeleteTask(taskId: string): void {
    this.taskDeleted.emit(taskId);
  }
}
