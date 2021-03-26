import { ActionType, Actions } from './Context.actions';

export interface State {
  count: number;
}

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionType.Increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionType.Decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
