import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CheckboxComponent } from "../../atoms/checkbox/checkbox.component";
import { Task, TaskStatus } from "../../models/task.model";

@Component({
  selector: "app-task-item",
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: "./task-item.component.html",
  styleUrl: "./task-item.component.scss",
})
export class TaskItemComponent {
  taskStatus = TaskStatus;
  @Input() task!: Task;

  @Output() toggleComplete = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onToggleComplete(): void {
    this.toggleComplete.emit(this.task.id);
  }

  onDelete(): void {
    this.delete.emit(this.task.id);
  }
}
