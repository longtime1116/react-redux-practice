import axios from 'axios';
import { Todo } from '../types/CommonTypes';

export const addTodo = async (title: string): Promise<Todo> => {
  const { data } = await axios.post<Todo>('http://localhost:4000/todos', {
    title,
    completed: false
  });
  return data;
};
