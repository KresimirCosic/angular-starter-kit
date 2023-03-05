import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getTodos,
  getTodosSuccess,
  getTodosFailure,
} from '@app/modules/todos/store/actions';
import { catchError, map, mergeMap, of } from 'rxjs';

import { TodosService } from '@app/modules/todos/services/todos.service';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodosService) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map(
            (todos) => getTodosSuccess({ todos }),
            catchError((error) => of(getTodosFailure({ error })))
          )
        )
      )
    )
  );
}
