import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';

import {
  getTodos,
  getTodosFailure,
  getTodosSuccess,
} from '@app/modules/todos/store/actions';
import { TodosState } from '@app/modules/todos/store/state';

export const initialState: TodosState = new TodosState();

export const todosReducer = createReducer(
  initialState,
  on(getTodos, (state) => {
    const newState = cloneDeep(state);

    return { ...newState, isLoading: true };
  }),
  on(getTodosSuccess, (state, { todos }) => {
    const newState = cloneDeep(state);

    return { ...newState, todos, isLoading: false };
  }),
  on(getTodosFailure, (state, { error }) => {
    const newState = cloneDeep(state);

    return { ...newState, error, isLoading: false };
  })
);
