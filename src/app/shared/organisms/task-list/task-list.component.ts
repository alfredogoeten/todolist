import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TaskItemComponent } from "../../molecules/task-item/task-item.component";

import { EmptyStateComponent } from "../../../templates/empty-state/empty-state.component";
import { Task } from "../../models/task.model";


@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [TaskItemComponent, EmptyStateComponent],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.scss",
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  
  @Output() taskToggled = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();

  

  onToggleTask(taskId: string): void {
    this.taskToggled.emit(taskId);
  }

  onDeleteTask(taskId: string): void {
    this.taskDeleted.emit(taskId);
  }
}
