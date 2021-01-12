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

export const reducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case InnerType.StartFetch:
      return {
        ...state,
        loading: true,
      };
    case InnerType.FinishFetch:
      return {
        ...state,
        loading: false,
        // TODO: Remove these fake values
        user: { firstName: action.firstName },
      };
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
    default:
      throw new Error("unknown action type");
  }
};

export const asyncActionHandlers: AsyncActionHandlers<
  Reducer<State, Action>,
  AsyncAction
> = {
  [AsyncType.FetchPerson]: ({ dispatch }) => async (action) => {
    dispatch({ type: InnerType.StartFetch });
    try {
      const response = await fetch(
        `https://reqres.in/api/users/${action.id}?delay=1`
      );
      if (!response.ok) {
        throw new Error(`${response.status} error`);
      }
      const data = await response.json();
      const firstName = data.data.first_name;
      if (typeof firstName !== "string") throw new Error();
      dispatch({ type: InnerType.FinishFetch, firstName });
    } catch (e) {
      dispatch({ type: InnerType.ErrorFetch, message: e.message });
    }
  },
};
