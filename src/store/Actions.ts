import type { Dispatch } from "react";
import type { UserSessionInfo } from "./State";

/**
 * InnerType are internal action types.
 */
export enum InnerType {
  ErrorFetch = "ERROR_FETCH",

  // Real Textile APIs
  StartSignUp = "START_SIGNUP",
  FinishSignUp = "FINISH_SIGNUP",
}

/**
 * OuterType are externally accessible action types.
 */
export enum OuterType {
  Increment = "INCREMENT",
}

/**
 * AsyncType are externally accessible action types.
 */
export enum AsyncType {
  SignUp = "SIGNUP",
}

/**
 * InnterAction are internal sync actions.
 */
export type InnerAction =
  | { type: InnerType.ErrorFetch; message: string }
  | { type: InnerType.StartSignUp }
  | { type: InnerType.FinishSignUp; sessionInfo: UserSessionInfo };

/**
 * OuterAction are external sync actions.
 */
export type OuterAction = { type: OuterType.Increment };

/**
 * Action represents all possible sync actions.
 */
export type Action = InnerAction | OuterAction;

/**
 * AsyncAction represents all possible async actions.
 */
export type AsyncAction = {
  type: AsyncType.SignUp;
  username: string;
  email: string;
};

/**
 * Actions defines the access patterns for actions on our store.
 */
export interface Actions {
  increment: () => void;
  signUp(username: string, email: string): void;
}

export function createActions(
  dispatch: Dispatch<OuterAction | AsyncAction>
): Actions {
  const increment = () => dispatch({ type: OuterType.Increment });

  const signUp = (username: string, email: string) =>
    dispatch({ type: AsyncType.SignUp, username, email });

  return { increment, signUp };
}
