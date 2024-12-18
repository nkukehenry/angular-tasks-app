import { CommonModule } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  
   todos:any[] = []

   todosService = inject(TodosService);
//constructor(private todosService:TodosService){ }

  ngOnInit(){
    
    this.getTodos();

  }
   
   getTodos() {

    //this.httpClient.get('https://jsonfakery.com/todos')

    this.todosService.fetchTodos()
    .subscribe(
      (resp:any)=>{

      console.log(resp);
      this.todos = resp

     },
     (mess)=>{
        console.log(mess)
        alert("An error occured in the application")
     }
    )
    
   }



}
