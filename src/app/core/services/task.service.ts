import { Injectable, signal } from '@angular/core';
import { Task, TaskState, initialTaskState, TaskFilter, TaskStatus } from '../../shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private state = signal<TaskState>({ ...initialTaskState });

  public readonly tasks = this.state.asReadonly();

  constructor() {
    this.loadState();
  }

  private loadState(): void {
    const savedState = localStorage.getItem('taskState');
    if (savedState) {
      try {
        this.state.set(JSON.parse(savedState));
      } catch (e) {
        console.error('Failed to parse saved state', e);
      }
    }
  }

  private saveState(): void {
    localStorage.setItem('taskState', JSON.stringify(this.state()));
  }

  addTask(name: string): void {
    if (!name.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      name: name.trim(),
      status: TaskStatus.Pending,
    };

    this.state.update(state => ({
      ...state,
      tasks: [...state.tasks, newTask]
    }));

    this.saveState();
  }

  toggleTask(id: string): void {
    this.state.update(state => ({
      ...state,
      tasks: state.tasks.map(task => 
        task.id === id 
          ? { 
              ...task, 
              status: task.status === TaskStatus.Completed 
                ? TaskStatus.Pending 
                : TaskStatus.Completed
            }
          : task
      )
    }));

    this.saveState();
  }

  updateTask(id: string, updates: Partial<Omit<Task, 'id'>>): void {
    this.state.update(state => ({
      ...state,
      tasks: state.tasks.map(task =>
        task.id === id 
          ? { ...task, ...updates }
          : task
      )
    }));

    this.saveState();
  }

  deleteTask(id: string): void {
    this.state.update(state => ({
      ...state,
      tasks: state.tasks.filter(task => task.id !== id)
    }));

    this.saveState();
  }

  setFilter(filter: TaskFilter): void {
    this.state.update(state => ({
      ...state,
      filter
    }));
  }

  getFilteredTasks(): Task[] {
    const { tasks, filter } = this.state();
    
    switch (filter) {
      case TaskFilter.Active:
        return tasks.filter(task => task.status === TaskStatus.Pending);
      case TaskFilter.Completed:
        return tasks.filter(task => task.status === TaskStatus.Completed);
      default:
        return [...tasks];
    }
  }

  getTaskById(id: string): Task | undefined {
    return this.state().tasks.find(task => task.id === id);
  }

  clearCompleted(): void {
    this.state.update(state => ({
      ...state,
      tasks: state.tasks.filter(task => task.status !== TaskStatus.Completed)
    }));

    this.saveState();
  }
}
