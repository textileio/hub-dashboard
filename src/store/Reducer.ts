import { Reducer } from "react";
import { AsyncActionHandlers } from "use-reducer-async";
import Cookies from "universal-cookie";

import { State } from "./State";
import * as Actions from "./Actions";
import { admin } from "./Textile";

export const cookies = new Cookies();

export const reducer: Reducer<State, Actions.Action> = (
  state,
  action
): State => {
  switch (action.type) {
    case Actions.OuterType.SetError:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case Actions.OuterType.ClearError:
      return {
        ...state,
        error: undefined,
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
  [Actions.AsyncType.SignUp]: ({ dispatch }) => async ({
    username,
    email,
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartSignUp });
    // This will sit here, waiting until we get a confirmation email click
    return admin
      .signUp(username, email)
      .then((sessionInfo) => {
        cookies.set("sessionInfo", sessionInfo, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // TODO: Pick a better time (1 week)
        });
        dispatch({ type: Actions.InnerType.FinishSignUp, sessionInfo });
        if (callback) callback(sessionInfo);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
};
