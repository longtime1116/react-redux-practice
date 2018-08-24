import { Reducer } from 'redux';
import { Todo } from '../types/CommonTypes';
import { ActionTypes } from '../types/ActionTypes';

export interface TodosState {
  todos: Todo[];
  loading: boolean;
}

const initialState: TodosState = {
  todos: [],
  loading: true
};

export const todosReducer: Reducer<TodosState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      // TODO
      return state;
    case ActionTypes.TOGGLE_TODO:
      // TODO
      return state;
    default:
      return state;
  }
};
