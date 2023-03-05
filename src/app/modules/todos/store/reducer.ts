import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';

import { getTodos } from '@app/modules/todos/store/actions';
import { TodosState } from '@app/modules/todos/store/state';

export const initialState: TodosState = new TodosState();

export const todosReducer = createReducer(
  initialState,
  on(getTodos, (state) => {
    const newState = cloneDeep(state);

    return { ...newState, isLoading: true };
  })
);
