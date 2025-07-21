import { Routes } from '@angular/router';
import { Todo } from './pages/todo/todo';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: Todo,
    title: 'My Todo List',
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];
