import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'task-list',component: TaskListComponent},
    {path:'new-task',component: CreateTaskComponent},
    {
        path:'contact',
        loadComponent: ()=> import('./home/home.component').then(component=>component.HomeComponent),
        title:'Contact Us Page'
    },
    {path:'**',component: NotFoundComponent},
];
