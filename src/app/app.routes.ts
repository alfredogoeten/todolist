import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: TodoComponent,
    title: 'Atomic Design To-Do List',
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];
