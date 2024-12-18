import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  //httpClient = inject(HttpClient);

  constructor(private httpClient: HttpClient) { }

  fetchTodos(){
    return this.httpClient.get('https://jsonfakery.com/todos');
  }

  fetchPaginatedTodos(){
    return this.httpClient.get('https://jsonfakery.com/todos/paginated');
  }

}
