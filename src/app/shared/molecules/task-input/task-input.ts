import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button';
import { InputComponent } from '../../atoms/input/input';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css'
})
export class TaskInputComponent {
  taskName = '';
  
  @Output() addTask = new EventEmitter<string>();

  onAddTask(): void {
    if (this.taskName.trim()) {
      this.addTask.emit(this.taskName.trim());
      this.taskName = '';
    }
  }

  onTaskNameChange(value: string): void {
    this.taskName = value;
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onAddTask();
    }
  }
}
