import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'task-list',component: TaskListComponent},
    {path:'new-task',component: CreateTaskComponent},
    {path:'**',component: NotFoundComponent},
];
