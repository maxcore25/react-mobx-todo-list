import { makeAutoObservable } from 'mobx';

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     text: todo.id === id ? text : todo.text,
//   }));

// export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     done: todo.id === id ? !todo.done : todo.done,
//   }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter(todo => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// MobX implementation
class TodoStore {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = '';
  }

  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }
}

const todoStore = new TodoStore();
export default todoStore;
