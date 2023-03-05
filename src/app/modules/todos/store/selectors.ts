import { createSelector } from '@ngrx/store';

import { AppState } from '@app/store/state';

export const selectTodosFeature = (state: AppState) => state.todos;

export const selectIsLoading = createSelector(
  selectTodosFeature,
  (state) => state.isLoading
);
export const selectTodos = createSelector(
  selectTodosFeature,
  (state) => state.todos
);
