import * as React from 'react';
import { Todo } from '../types/CommonTypes';

export const TodoItem = ({ id, title }: Todo) => {
  return (
    <div>
      {id}: {title}
    </div>
  );
};
