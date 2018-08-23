import * as React from 'react';
import { Todo } from '../types';

export const TodoItem = ({ id, title }: Todo) => {
  return (
    <div>
      {id}: {title}
    </div>
  );
};
