import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { Todo } from '@app/modules/todos/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  getTodos(): Observable<Array<Todo>> {
    const todos: Array<Todo> = [
      {
        id: 1,
        userId: 1,
        title: 'Title 1',
        completed: false,
      },
      {
        id: 2,
        userId: 2,
        title: 'Title 2',
        completed: true,
      },
      {
        id: 3,
        userId: 2,
        title: 'Title 3',
        completed: false,
      },
      {
        id: 4,
        userId: 3,
        title: 'Title 4',
        completed: true,
      },
    ];

    return of(todos).pipe(delay(1000));
  }
}
