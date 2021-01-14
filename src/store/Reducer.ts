import { Reducer } from "react";
import { AsyncActionHandlers } from "use-reducer-async";

import { State } from "./State";
import * as Actions from "./Actions";
import { admin } from "./Textile";

export const reducer: Reducer<State, Actions.Action> = (
  state,
  action
): State => {
  switch (action.type) {
    case Actions.InnerType.ErrorFetch:
      return {
        ...state,
        loading: false,
        hub: { count: 0 }, // TODO: Remove these fake values
      };
    case Actions.OuterType.Increment:
      return {
        ...state,
        hub: { count: (state.hub?.count ?? 0) + 1 },
      };

    // Real Textile APIs
    case Actions.InnerType.StartSignUp:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishSignUp:
      const { sessionInfo } = action;
      return {
        ...state,
        loading: false,
        user: { ...state.user, sessionInfo },
      };
    default:
      throw new Error("unknown action type");
  }
};

export const asyncActionHandlers: AsyncActionHandlers<
  Reducer<State, Actions.Action>,
  Actions.AsyncAction
> = {
  [Actions.AsyncType.SignUp]: ({ dispatch }) => async ({ username, email }) => {
    dispatch({ type: Actions.InnerType.StartSignUp });
    // This will sit here, waiting until we get a confirmation email click
    admin
      .signUp(username, email)
      .then((sessionInfo) => {
        console.log(sessionInfo);
        dispatch({ type: Actions.InnerType.FinishSignUp, sessionInfo });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: Actions.InnerType.ErrorFetch, message: e.message });
      });
  },
};
