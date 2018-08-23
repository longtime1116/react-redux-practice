import * as React from 'react';
import { Todo } from '../types';

/**
 * Mock データを返す
 * Promise.resolve() に渡された値が then の response に入る
 * @example
 * fetchTodos().then(response => {
 *   console.log(response); // { data: [...] }
 *   console.log(response.data[0]); // { userId: 1, id: 1, title: 'foo', ... }
 * });
 */
const fetchTodos = () => {
  const data: Todo[] = [
    { userId: 1, id: 1, title: 'foo', completed: false },
    { userId: 1, id: 2, title: 'bar', completed: true }
  ];
  return Promise.resolve({ data });
};

interface Props {}
interface State {
  todos: Todo[];
}

export default class TodosContainer extends React.Component<Props, State> {
  public state: State = {
    todos: []
  };

  public componentDidMount() {
    fetchTodos()
      .then(({ data }) => {
        this.setState({ todos: data });
      })
      .catch(error => {
        alert(error);
      });
  }

  public render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <div>{todos.map(this.renderTodo)}</div>
      </React.Fragment>
    );
  }

  private renderTodo(todo: Todo) {
    return (
      <div key={todo.id}>
        {todo.id}: {todo.title}
      </div>
    );
  }
}
