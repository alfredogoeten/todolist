import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item';
import { TaskInputComponent } from '../task-input/task-input';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, TaskInputComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  
  @Output() taskAdded = new EventEmitter<string>();
  @Output() taskToggled = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();

  onAddTask(name: string): void {
    this.taskAdded.emit(name);
  }

  onToggleTask(taskId: string): void {
    this.taskToggled.emit(taskId);
  }

  onDeleteTask(taskId: string): void {
    this.taskDeleted.emit(taskId);
  }
}
