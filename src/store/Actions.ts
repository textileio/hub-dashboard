import type { Dispatch } from "react";

import type {
  SessionInfoResponse,
  OrgInfo,
  KeyInfo,
  SigninOrSignupResponse,
} from "./State";

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
  // FetchSessionInfo
  StartFetchSessionInfo = "START_FETCH_SESSION_INFO",
  FinishFetchSessionInfo = "FINISH_FETCH_SESSION_INFO",
  // FetchKeys
  StartFetchKeys = "START_FETCH_KEYS",
  FinishFetchKeys = "FINISH_FETCH_KEYS",
  // CreateOrg
  StartCreateOrg = "START_CREATE_ORG",
  FinishCreateOrg = "FINISH_CREATE_ORG",
}

/**
 * OuterType are externally accessible action types.
 */
export enum OuterType {
  SetError = "SET_ERROR",
  ClearError = "CLEAR_ERROR",
  SignOut = "SIGN_OUT",
  SetCurrentOrg = "SET_CURRENT_ORG",
}

/**
 * AsyncType are externally accessible action types.
 */
export enum AsyncType {
  SignUp = "SIGN_UP",
  SignIn = "SIGN_IN",
  FetchOrgs = "FETCH_ORGS",
  FetchKeys = "FETCH_KEYS",
  FetchSessionInfo = "FETCH_SESSION_INFO",
  CreateOrg = "CREATE_ORG",
}

/**
 * InnterAction are internal sync actions.
 */
export type InnerAction =
  | { type: InnerType.StartSignUp }
  | { type: InnerType.StartSignIn }
  | {
      type: InnerType.FinishSignUp;
      sessionInfo: SigninOrSignupResponse;
      username: string;
    }
  | {
      type: InnerType.FinishSignIn;
      sessionInfo: SigninOrSignupResponse;
      username: string;
    }
  | { type: InnerType.StartFetchOrgs }
  | { type: InnerType.FinishFetchOrgs; orgs: OrgInfo[] }
  | { type: InnerType.StartFetchKeys }
  | { type: InnerType.FinishFetchKeys; keys: KeyInfo[] }
  | { type: InnerType.StartFetchSessionInfo }
  | {
      type: InnerType.FinishFetchSessionInfo;
      sessionInfo: SessionInfoResponse;
    }
  | { type: InnerType.StartCreateOrg }
  | {
      type: InnerType.FinishCreateOrg;
      org: OrgInfo;
    };

/**
 * OuterAction are external sync actions.
 */
export type OuterAction =
  | { type: OuterType.SetError; message: string }
  | { type: OuterType.ClearError }
  | { type: OuterType.SignOut }
  | { type: OuterType.SetCurrentOrg; name?: string };

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
      callback?: Callback<SigninOrSignupResponse>;
    }
  | {
      type: AsyncType.SignIn;
      username: string;
      email: string;
      callback?: Callback<SigninOrSignupResponse>;
    }
  | {
      type: AsyncType.FetchOrgs;
      callback?: Callback<OrgInfo[]>;
    }
  | {
      type: AsyncType.FetchKeys;
      org: string;
      callback?: Callback<KeyInfo[]>;
    }
  | {
      type: AsyncType.FetchSessionInfo;
      callback?: Callback<SessionInfoResponse>;
    }
  | {
      type: AsyncType.CreateOrg;
      name: string;
      callback?: Callback<OrgInfo>;
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
    callback?: Callback<SigninOrSignupResponse>
  ): void;
  signIn(
    username: string,
    email: string,
    callback?: Callback<SigninOrSignupResponse>
  ): void;
  signOut(): void;
  fetchOrgs(callback?: Callback<OrgInfo[]>): void;
  fetchKeys(org: string, callback?: Callback<KeyInfo[]>): void;
  fetchSessionInfo(callback?: Callback<SessionInfoResponse>): void;
  createOrg(name: string, callback?: Callback<OrgInfo>): void;
  setCurrentOrg(name?: string): void;
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
    callback?: Callback<SigninOrSignupResponse>
  ) => dispatch({ type: AsyncType.SignUp, username, email, callback });

  const signOut = () => dispatch({ type: OuterType.SignOut });

  const signIn = (
    username: string,
    email: string,
    callback?: Callback<SigninOrSignupResponse>
  ) => dispatch({ type: AsyncType.SignIn, username, email, callback });

  const fetchOrgs = (callback?: Callback<OrgInfo[]>) =>
    dispatch({ type: AsyncType.FetchOrgs, callback });

  const fetchKeys = (org: string, callback?: Callback<KeyInfo[]>) =>
    dispatch({ type: AsyncType.FetchKeys, org, callback });

  const fetchSessionInfo = (callback?: Callback<SessionInfoResponse>) =>
    dispatch({ type: AsyncType.FetchSessionInfo, callback });

  const createOrg = (name: string, callback?: Callback<OrgInfo>) =>
    dispatch({ type: AsyncType.CreateOrg, name, callback });

  const setCurrentOrg = (name?: string) =>
    dispatch({ type: OuterType.SetCurrentOrg, name });

  return {
    setError,
    clearError,
    signUp,
    signIn,
    fetchOrgs,
    fetchKeys,
    fetchSessionInfo,
    createOrg,
    signOut,
    setCurrentOrg,
  };
}
