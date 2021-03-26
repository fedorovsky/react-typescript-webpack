import * as React from 'react';
import { Actions } from './Context.actions';
import reducer, { State } from './Context.reducer';

interface Context {
  state: State;
  dispatch: React.Dispatch<Actions>;
}

const initialState: State = {
  count: 0,
};

const Context = React.createContext<Context>({
  state: initialState,
  dispatch: () => null,
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Context;
