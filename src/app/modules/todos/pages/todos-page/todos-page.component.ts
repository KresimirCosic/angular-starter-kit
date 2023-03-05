import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getTodos } from '@app/modules/todos/store/actions';
import { AppState } from '@app/store/state';
import { Observable } from 'rxjs';
import { selectIsLoading } from '@app/modules/todos/store/selectors';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
})
export class TodosPageComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(selectIsLoading));
  }

  ngOnInit(): void {
    this.store.dispatch(getTodos());
  }
}
