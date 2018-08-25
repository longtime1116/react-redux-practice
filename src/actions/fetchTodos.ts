import * as apis from '../apis';
import { ActionTypes, Action } from '../types/ActionTypes';
import { Todo } from '../types/CommonTypes';

const fetchTodosRequest = (): Action => ({
  type: ActionTypes.FETCH_TODOS_REQUEST
});

const fetchTodoSuccess = (todos: Todo[]): Action => ({
  type: ActionTypes.FETCH_TODOS_SUCCESS,
  payload: { todos }
});

const fetchTodosFailure = (): Action => ({
  type: ActionTypes.FETCH_TODOS_FAILURE
});

export const fetchTodo = () => {
  return async dispatch => {
    dispatch(fetchTodosRequest());

    try {
      const todos = await apis.fetchTodos();
      dispatch(fetchTodoSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure());
      alert(error);
    }
  };
};
