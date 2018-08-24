import { combineReducers, Reducer } from '../../node_modules/redux';
import { Todo } from '../types/CommonTypes';
import { ActionTypes } from '../types/ActionTypes';

export interface TodosState {
  todos: Todo[];
  loading: boolean;
}

export interface RootState {
  todos: TodosState;
}

const initialState: TodosState = {
  todos: [],
  loading: true
};

const todosReducer: Reducer<TodosState> = (state = initialState, action) => {
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

export const rootReducer = combineReducers<RootState>({
  todos: todosReducer
});
