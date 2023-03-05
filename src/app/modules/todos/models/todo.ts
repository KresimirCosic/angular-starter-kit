export class Todo {
  constructor(
    public userId: number = 0,
    public id: number = 0,
    public title: string = '',
    public completed: boolean = false
  ) {}

  public static fromJSON(JSON: Todo): Todo {
    return new Todo(JSON.userId, JSON.id, JSON.title, JSON.completed);
  }

  public static fromArrayJSON(JSON: Array<Todo>): Array<Todo> {
    return JSON.map(
      (todo) => new Todo(todo.userId, todo.id, todo.title, todo.completed)
    );
  }
}
