import * as React from 'react';
import { TodoItem } from '../components/TodoItem';
import { Todo } from '../types';

interface Props {
  todos: Todo[];
}
interface State {}

export class TodoList extends React.Component<Props, State> {
  public render() {
    const { todos } = this.props;

    return (
      <React.Fragment>
        <div>{todos.map(this.renderTodo)}</div>
      </React.Fragment>
    );
  }

  private renderTodo(todo: Todo) {
    return <TodoItem key={todo.id} {...todo} />;
  }
}
