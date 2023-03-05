import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

const createActionName = (actionName: string): string => {
  const namespace = '[Todos]';

  return `${namespace} ${actionName}`;
};

export const getTodos = createAction(createActionName('Get Todos'));
export const getTodosSuccess = createAction(
  createActionName('Get Todos Success'),
  props<{ todos: Array<Todo> }>()
);
export const getTodosFailure = createAction(
  createActionName('Get Todos Failure'),
  props<{ error: string }>()
);
