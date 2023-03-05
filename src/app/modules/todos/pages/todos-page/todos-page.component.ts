import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getTodos } from '@app/modules/todos/store/actions';
import { AppState } from '@app/store/state';
import { Observable } from 'rxjs';

import {
  selectError,
  selectIsLoading,
  selectTodos,
} from '@app/modules/todos/store/selectors';
import { Todo } from '@app/modules/todos/models/todo';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
})
export class TodosPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  todos$: Observable<Array<Todo>>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(selectIsLoading));
    this.todos$ = this.store.pipe(select(selectTodos));
    this.error$ = this.store.pipe(select(selectError));
  }

  ngOnInit(): void {
    this.store.dispatch(getTodos());
  }
}
