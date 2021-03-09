import type { Dispatch } from "react";

import type {
  SessionInfoResponse,
  OrgInfo,
  KeyInfo,
  KeyType,
  SigninOrSignupResponse,
  GetThreadResponse,
  Root,
} from "./State";

import { cookies } from "./Reducer";

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
  // FetchSessionInfo
  StartFetchSessionInfo = "START_FETCH_SESSION_INFO",
  FinishFetchSessionInfo = "FINISH_FETCH_SESSION_INFO",
  // FetchKeys
  StartFetchKeys = "START_FETCH_KEYS",
  FinishFetchKeys = "FINISH_FETCH_KEYS",
  // CreateKey
  StartCreateKey = "START_CREATE_KEY",
  FinishCreateKey = "FINISH_CREATE_KEY",
  // RevokeKey
  StartRevokeKey = "START_REVOKE_KEY",
  FinishRevokeKey = "FINISH_REVOKE_KEY",
  // FetchOrgs
  StartFetchOrgs = "START_FETCH_ORGS",
  FinishFetchOrgs = "FINISH_FETCH_ORGS",
  // CreateOrg
  StartCreateOrg = "START_CREATE_ORG",
  FinishCreateOrg = "FINISH_CREATE_ORG",
  // LeaveOrg
  StartLeaveOrg = "START_LEAVE_ORG",
  FinishLeaveOrg = "FINISH_LEAVE_ORG",
  // InviteToOrg
  StartInviteToOrg = "START_INVITE_TO_ORG",
  FinishInviteToOrg = "FINISH_INVITE_TO_ORG",
  //FetchBuckets
  StartFetchBuckets = "START_FETCH_BUCKETS",
  FinishFetchBuckets = "FINISH_FETCH_BUCKETS",
  //FetchThreads
  StartFetchThreads = "START_FETCH_THREADS",
  FinishFetchThreads = "FINISH_FETCH_THREADS",
  //FetchThreads
  StartFetchThread = "START_FETCH_THREAD",
  FinishFetchThread = "FINISH_FETCH_THREAD",
}

/**
 * OuterType are externally accessible action types.
 */
export enum OuterType {
  SetError = "SET_ERROR",
  ClearError = "CLEAR_ERROR",
  SignOut = "SIGN_OUT",
}

/**
 * AsyncType are externally accessible action types.
 */
export enum AsyncType {
  SignUp = "SIGN_UP",
  SignIn = "SIGN_IN",
  FetchKeys = "FETCH_KEYS",
  CreateKey = "CREATE_KEY",
  RevokeKey = "REVOKE_KEY",
  FetchOrgs = "FETCH_ORGS",
  CreateOrg = "CREATE_ORG",
  LeaveOrg = "LEAVE_ORG",
  InviteToOrg = "INVITE_TO_ORG",
  FetchSessionInfo = "FETCH_SESSION_INFO",
  FetchBuckets = "FETCH_BUCKETS",
  FetchThreads = "FETCH_THREADS",
  FetchThread = "FETCH_THREAD",
}

/**
 * InnterAction are internal sync actions.
 */
export type InnerAction =
  // SignUp/SignIn
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
  // FetchKeys
  | { type: InnerType.StartFetchKeys }
  | { type: InnerType.FinishFetchKeys; keys: KeyInfo[] }
  // CreateKey
  | { type: InnerType.StartCreateKey }
  | { type: InnerType.FinishCreateKey; key: KeyInfo }
  // RevokeKey
  | { type: InnerType.StartRevokeKey }
  | { type: InnerType.FinishRevokeKey; key: string }
  // FetchOrgs
  | { type: InnerType.StartFetchOrgs }
  | { type: InnerType.FinishFetchOrgs; orgs: OrgInfo[] }
  // CreateOrg
  | { type: InnerType.StartCreateOrg }
  | { type: InnerType.FinishCreateOrg; org: OrgInfo }
  // LeaveOrg
  | { type: InnerType.StartLeaveOrg }
  | { type: InnerType.FinishLeaveOrg; name: string }
  // InviteToOrg
  | { type: InnerType.StartInviteToOrg }
  | { type: InnerType.FinishInviteToOrg; invite: string }
  // FetchSessionInfo
  | { type: InnerType.StartFetchSessionInfo }
  | {
      type: InnerType.FinishFetchSessionInfo;
      sessionInfo: SessionInfoResponse;
    }
  // FetchBuckets
  | { type: InnerType.StartFetchBuckets }
  | {
      type: InnerType.FinishFetchBuckets;
      buckets: Root[];
    }
  // FetchThreads
  | { type: InnerType.StartFetchThreads }
  | {
      type: InnerType.FinishFetchThreads;
      threads: GetThreadResponse[];
    }
  | { type: InnerType.StartFetchThread }
  | {
      type: InnerType.FinishFetchThread;
      threads: any;
    };

/**
 * OuterAction are external sync actions.
 */
export type OuterAction =
  | { type: OuterType.SetError; message: string }
  | { type: OuterType.ClearError }
  | { type: OuterType.SignOut };

/**
 * Action represents all possible sync actions.
 */
export type Action = InnerAction | OuterAction;

type Callback<T = any> = (arg?: T, err?: Error) => void;

/**
 * AsyncAction represents all possible async actions.
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
      type: AsyncType.FetchKeys;
      org: string;
      callback?: Callback<KeyInfo[]>;
    }
  | {
      type: AsyncType.CreateKey;
      org: string;
      keyType: KeyType;
      secure: boolean;
      callback?: Callback<KeyInfo>;
    }
  | {
      type: AsyncType.RevokeKey;
      org: string;
      key: string;
      callback?: Callback<string>;
    }
  | {
      type: AsyncType.FetchOrgs;
      callback?: Callback<OrgInfo[]>;
    }
  | {
      type: AsyncType.CreateOrg;
      name: string;
      callback?: Callback<OrgInfo>;
    }
  | {
      type: AsyncType.LeaveOrg;
      name: string;
      callback?: Callback<string>;
    }
  | {
      type: AsyncType.InviteToOrg;
      email: string;
      name: string;
      callback?: Callback<string>;
    }
  | {
      type: AsyncType.FetchSessionInfo;
      callback?: Callback<SessionInfoResponse>;
    }
  | {
      type: AsyncType.FetchBuckets;
      callback?: Callback<Root[]>;
    }
  | {
      type: AsyncType.FetchThreads;
      callback?: Callback<GetThreadResponse[]>;
    }
  | {
      type: AsyncType.FetchThread;
      threadID: string;
      callback?: Callback<any>;
    };

/**
 * Actions defines the access patterns for actions on our store.
 */
export type Actions = ReturnType<typeof createActions>;

export function createActions(dispatch: Dispatch<OuterAction | AsyncAction>) {
  const setError = (message: string) =>
    dispatch({ type: OuterType.SetError, message });

  const clearError = () => dispatch({ type: OuterType.ClearError });

  const signUp = (
    username: string,
    email: string,
    callback?: Callback<SigninOrSignupResponse>
  ) => dispatch({ type: AsyncType.SignUp, username, email, callback });

  const signOut = () => {
    cookies.remove("sessionInfo");
    dispatch({ type: OuterType.SignOut });
  };

  const signIn = (
    username: string,
    email: string,
    callback?: Callback<SigninOrSignupResponse>
  ) => dispatch({ type: AsyncType.SignIn, username, email, callback });

  const fetchOrgs = (callback?: Callback<OrgInfo[]>) =>
    dispatch({ type: AsyncType.FetchOrgs, callback });

  const createOrg = (name: string, callback?: Callback<OrgInfo>) =>
    dispatch({ type: AsyncType.CreateOrg, name, callback });

  const leaveOrg = (name: string, callback?: Callback<string>) =>
    dispatch({ type: AsyncType.LeaveOrg, name, callback });

  const inviteToOrg = (
    email: string,
    name: string,
    callback?: Callback<string>
  ) => dispatch({ type: AsyncType.InviteToOrg, email, name, callback });

  const fetchKeys = (org: string, callback?: Callback<KeyInfo[]>) =>
    dispatch({ type: AsyncType.FetchKeys, org, callback });

  const createKey = (
    keyType: KeyType,
    secure: boolean,
    org: string,
    callback?: Callback<KeyInfo>
  ) => dispatch({ type: AsyncType.CreateKey, keyType, secure, org, callback });

  const revokeKey = (key: string, org: string, callback?: Callback<string>) =>
    dispatch({ type: AsyncType.RevokeKey, key, org, callback });

  const fetchSessionInfo = (callback?: Callback<SessionInfoResponse>) =>
    dispatch({ type: AsyncType.FetchSessionInfo, callback });

  const fetchBuckets = (callback?: Callback<Root[]>) =>
    dispatch({ type: AsyncType.FetchBuckets, callback });

  const fetchThreads = (callback?: Callback<GetThreadResponse[]>) =>
    dispatch({ type: AsyncType.FetchThreads, callback });

  const fetchThread = (threadID: string, callback?: Callback<any>) =>
    dispatch({ type: AsyncType.FetchThread, threadID, callback });

  return {
    setError,
    clearError,
    signUp,
    signIn,
    signOut,
    fetchOrgs,
    leaveOrg,
    inviteToOrg,
    createOrg,
    fetchKeys,
    createKey,
    revokeKey,
    fetchSessionInfo,
    fetchBuckets,
    fetchThreads,
    fetchThread,
  };
}
