import { Component, computed, inject, ViewChild, ElementRef } from "@angular/core";
import { ButtonComponent } from "../../shared/atoms/button/button.component";
import { IconComponent } from "../../shared/atoms/icon/icon.component";
import { TaskListComponent } from "../../shared/organisms/task-list/task-list.component";
import { TaskInputComponent } from "../../shared/molecules/task-input/task-input.component";
import { TaskService } from "../../core/services/task.service";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [TaskListComponent, TaskInputComponent, ButtonComponent, IconComponent],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.scss",
})
export class TodoComponent {
  lastAddedTaskId: string | null = null;
  @ViewChild(TaskListComponent, { read: ElementRef }) taskListContainer!: ElementRef<HTMLElement>;
  private taskService = inject(TaskService);

  hasCompletedTasks = computed(() => this.taskService.tasks().tasks.some(task => task.status === 'COMPLETED'));

  get taskList() {
    return [...this.taskService.tasks().tasks].sort((a, b) => Number(b.id) - Number(a.id));
  }

  onTaskAdded(taskName: string): void {
    const newTask = this.taskService.addTask(taskName);
    this.lastAddedTaskId = newTask.id;

    setTimeout(() => {
      if (this.taskListContainer) {
        this.taskListContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);
  }

  onTaskToggled(taskId: string): void {
    this.taskService.toggleTask(taskId);
  }

  onClearCompleted(): void {
    this.taskService.clearCompleted();
  }
}
