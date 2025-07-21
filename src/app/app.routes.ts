import { Routes } from '@angular/router';
import { TasksPage } from './features/tasks/pages/tasks-page/tasks-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: TasksPage,
    title: 'My Tasks',
  },
  {
    path: '**',
    redirectTo: 'tasks',
  },
];
