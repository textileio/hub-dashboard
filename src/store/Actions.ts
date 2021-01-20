import type { Dispatch } from "react";

import type { UserSessionInfo } from "./State";

/**
 * InnerType are internal action types.
 */
export enum InnerType {
  // Real Textile APIs
  StartSignUp = "START_SIGNUP",
  FinishSignUp = "FINISH_SIGNUP",
}

/**
 * OuterType are externally accessible action types.
 */
export enum OuterType {
  SetError = "SET_ERROR",
  ClearError = "CLEAR_ERROR",
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
  | { type: InnerType.StartSignUp }
  | { type: InnerType.FinishSignUp; sessionInfo: UserSessionInfo };

/**
 * OuterAction are external sync actions.
 */
export type OuterAction =
  | { type: OuterType.SetError; message: string }
  | { type: OuterType.ClearError };

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
  setError: (message: string) => void;
  clearError: () => void;
  signUp(username: string, email: string): void;
}

export function createActions(
  dispatch: Dispatch<OuterAction | AsyncAction>
): Actions {
  const setError = (message: string) =>
    dispatch({ type: OuterType.SetError, message });

  const clearError = () => dispatch({ type: OuterType.ClearError });

  const signUp = (username: string, email: string) =>
    dispatch({ type: AsyncType.SignUp, username, email });

  return { setError, clearError, signUp };
}
