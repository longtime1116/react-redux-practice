import { Reducer } from 'redux';
import { Todo } from '../types/CommonTypes';
import { ActionTypes, Action } from '../types/ActionTypes';

export interface TodosState {
  todos: Todo[];
  loading: boolean;
}

const initialState: TodosState = {
  todos: [],
  loading: true
};

export const todosReducer: Reducer<TodosState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      // TODO
      return state;
    case ActionTypes.FETCH_TODOS_REQUEST:
    case ActionTypes.FETCH_TODOS_FAILURE:
      return {
        ...state,
        todo: [],
        loading: true
      };

    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
        loading: false
      };
    case ActionTypes.TOGGLE_TODO:
      // TODO
      return state;
    default:
      return state;
  }
};