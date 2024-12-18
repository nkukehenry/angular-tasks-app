import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private todosService:TodosService){

  }

  ngOnInit(): void {
    
    this.todosService.fetchPaginatedTodos().subscribe(
      (response)=>console.log(response)
    )
  }

}
