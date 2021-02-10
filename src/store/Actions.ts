import type { Dispatch } from "react";

import type { UserSessionInfo, OrgInfo } from "./State";

/**
 * InnerType are internal action types.
 */
export enum InnerType {
  // SignUp
  StartSignUp = "START_SIGN_UP",
  FinishSignUp = "FINISH_SIGN_UP",
  // SignIn
  StartSignIn = "START_SIGN_IN",
  FinishSignIn = "FINISH_SIGN_IN",
  // FetchOrgs
  StartFetchOrgs = "START_FETCH_ORGS",
  FinishFetchOrgs = "FINISH_FETCH_ORGS",
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
  SignUp = "SIGN_UP",
  SignIn = "SIGN_IN",
  FetchOrgs = "FETCH_ORGS",
}

/**
 * InnterAction are internal sync actions.
 */
export type InnerAction =
  | { type: InnerType.StartSignUp }
  | { type: InnerType.StartSignIn }
  | {
      type: InnerType.FinishSignUp;
      sessionInfo: UserSessionInfo;
      username: string;
    }
  | {
      type: InnerType.FinishSignIn;
      sessionInfo: UserSessionInfo;
      username: string;
    }
  | { type: InnerType.StartFetchOrgs }
  | { type: InnerType.FinishFetchOrgs; orgs: OrgInfo[] };

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

type Callback<T = any> = (arg?: T, err?: Error) => void;

/**
 * AsyncAction represents all possible async actions.
 * TODO: This are joined as one because they are identical, this won't always be the case
 */
export type AsyncAction =
  | {
      type: AsyncType.SignUp;
      username: string;
      email: string;
      callback?: Callback<UserSessionInfo>;
    }
  | {
      type: AsyncType.SignIn;
      username: string;
      email: string;
      callback?: Callback<UserSessionInfo>;
    }
  | {
      type: AsyncType.FetchOrgs;
      callback?: Callback<OrgInfo[]>;
    };

/**
 * Actions defines the access patterns for actions on our store.
 */
export interface Actions {
  setError: (message: string) => void;
  clearError: () => void;
  signUp(
    username: string,
    email: string,
    callback?: Callback<UserSessionInfo>
  ): void;
  signIn(
    username: string,
    email: string,
    callback?: Callback<UserSessionInfo>
  ): void;
  fetchOrgs(callback?: Callback<OrgInfo[]>): void;
}

export function createActions(
  dispatch: Dispatch<OuterAction | AsyncAction>
): Actions {
  const setError = (message: string) =>
    dispatch({ type: OuterType.SetError, message });

  const clearError = () => dispatch({ type: OuterType.ClearError });

  const signUp = (
    username: string,
    email: string,
    callback?: Callback<UserSessionInfo>
  ) => dispatch({ type: AsyncType.SignUp, username, email, callback });

  const signIn = (
    username: string,
    email: string,
    callback?: Callback<UserSessionInfo>
  ) => dispatch({ type: AsyncType.SignIn, username, email, callback });

  const fetchOrgs = (callback?: Callback<any>) =>
    dispatch({ type: AsyncType.FetchOrgs, callback });

  return { setError, clearError, signUp, signIn, fetchOrgs };
}
