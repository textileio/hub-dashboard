import { Reducer } from "react";
import { AsyncActionHandlers } from "use-reducer-async";
import { State } from "./State";
import {
  Action,
  AsyncAction,
  InnerType,
  OuterType,
  AsyncType,
} from "./Actions";
import { admin } from "./Textile";

export const reducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case InnerType.ErrorFetch:
      return {
        ...state,
        loading: false,
        hub: { count: 0 }, // TODO: Remove these fake values
      };
    case OuterType.Increment:
      return {
        ...state,
        hub: { count: (state.hub?.count ?? 0) + 1 },
      };

    // Real Textile APIs
    case InnerType.StartSignUp:
      return {
        ...state,
        loading: true,
      };
    case InnerType.FinishSignUp:
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
  Reducer<State, Action>,
  AsyncAction
> = {
  [AsyncType.SignUp]: ({ dispatch }) => async (action) => {
    dispatch({ type: InnerType.StartSignUp });
    const { username, email } = action;
    try {
      // This will sit here, waiting until we get a confirmation email click
      const sessionInfo = await admin.signUp(username, email);
      dispatch({ type: InnerType.FinishSignUp, sessionInfo });
    } catch (e) {
      dispatch({ type: InnerType.ErrorFetch, message: e.message });
    }
  },
};
