import { Todo } from '@app/modules/todos/models/todo';

export class TodosState {
  constructor(
    public isLoading: boolean = false,
    public todos: Array<Todo> = []
  ) {}
}
