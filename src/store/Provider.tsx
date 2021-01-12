import React, { createContext, FunctionComponent, Reducer } from "react";
import { useReducerAsync } from "use-reducer-async";
import { State, initialState } from "./State";
import { reducer, asyncActionHandlers } from "./Reducer";
import {
  AsyncAction,
  OuterAction,
  Action,
  createActions,
  Actions,
} from "./Actions";

/**
 * Default store component.
 * Use this as the central access point to this global store.
 */
export const store = createContext({} as [State, Actions]);

// Pull the provide out from our context for use later
const { Provider } = store;

// The store provider is a react provider of our store context
export const StoreProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducerAsync<
    Reducer<State, Action>,
    AsyncAction,
    AsyncAction | OuterAction
  >(reducer, initialState, asyncActionHandlers);
  const actions = createActions(dispatch);
  return <Provider value={[state, actions]}>{children}</Provider>;
};

// Use api to make it easier to use our store all over the place.
export const useStore = () => {
  return React.useContext(store);
};
