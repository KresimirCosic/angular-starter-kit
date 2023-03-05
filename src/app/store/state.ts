import { TodosState } from '@app/modules/todos/store/state';

export class AppState {
  constructor(public todos: TodosState = new TodosState()) {}
}
