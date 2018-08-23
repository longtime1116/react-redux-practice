import * as React from 'react';
import { fetchTodos } from '../apis';
import { TodoList } from '../components/TodoList';
import { Todo } from '../types';

interface Props {}
interface State {
  todos: Todo[];
}

export default class TodosContainer extends React.Component<Props, State> {
  public state: State = {
    todos: []
  };

  public async componentDidMount() {
    try {
      const { data } = await fetchTodos();
      this.setState({ todos: data });
    } catch (error) {
      alert(error);
    }
  }

  public render() {
    const { todos } = this.state;
    return <TodoList todos={todos} onAddTodo={this.handleAddTodo} />;
  }

  private handleAddTodo = (title: string) => {
    const { todos } = this.state;

    const newTodo: Todo = {
      userId: Math.floor(Math.random() * 1000000),
      id: Math.floor(Math.random() * 1000000),
      title,
      completed: false
    };

    this.setState({ todos: todos.concat(newTodo) });
  };
}
