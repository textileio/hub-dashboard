import type { Reducer, FunctionComponent } from "react";
import { useReducerAsync } from "use-reducer-async";

import { State, initialState } from "./State";
import { reducer, asyncActionHandlers } from "./Reducer";
import { AsyncAction, OuterAction, Action, createActions } from "./Actions";
import Context from "./Context";

const Provider: FunctionComponent = ({ children }) => {
  // TODO: We _could_ actually include multiple reducers here to separate things more fully
  const [state, dispatch] = useReducerAsync<
    Reducer<State, Action>,
    AsyncAction,
    AsyncAction | OuterAction
  >(reducer, initialState, asyncActionHandlers);
  const actions = createActions(dispatch);
  return (
    <Context.Provider value={[state, actions]}>{children}</Context.Provider>
  );
};

export default Provider;
