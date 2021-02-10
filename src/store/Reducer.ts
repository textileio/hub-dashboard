import { Reducer } from "react";
import { AsyncActionHandlers } from "use-reducer-async";
import Cookies from "universal-cookie";

import { State } from "./State";
import * as Actions from "./Actions";
import { admin, Context } from "./Textile";

export const cookies = new Cookies();

const maxAge = 60 * 60 * 24 * 7; // TODO: Pick a better time (1 week)

const pickupCookies = (context: Context) => {
  return context.withSession(cookies.get("sessionInfo").session);
};

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
    case Actions.InnerType.StartSignIn:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishSignUp:
    case Actions.InnerType.FinishSignIn:
      const { username } = action;
      return {
        ...state,
        loading: false,
        user: { ...state.user, username },
      };
    case Actions.InnerType.StartFetchOrgs:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishFetchOrgs:
      const { orgs } = action;
      return {
        ...state,
        loading: false,
        user: { ...state.user, orgs },
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
          maxAge,
        });
        dispatch({
          type: Actions.InnerType.FinishSignUp,
          sessionInfo,
          username,
        });
        if (callback) callback(sessionInfo);
      })
      .catch((e) => {
        // If we have an "exists" error, we'll just log the user in instead
        if (e.message.includes("Account exists")) {
          return admin
            .signIn(username || email)
            .then((sessionInfo) => {
              cookies.set("sessionInfo", sessionInfo, {
                path: "/",
                maxAge,
              });
              dispatch({
                type: Actions.InnerType.FinishSignUp,
                sessionInfo,
                username: username || email,
              });
              if (callback) callback(sessionInfo);
            })
            .catch((e) => {
              dispatch({
                type: Actions.OuterType.SetError,
                message: e.message,
              });
              if (callback) callback(undefined, e);
            });
        } else {
          dispatch({ type: Actions.OuterType.SetError, message: e.message });
          if (callback) callback(undefined, e);
        }
      });
  },
  [Actions.AsyncType.SignIn]: ({ dispatch }) => async ({
    username,
    email,
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartSignIn });
    // This will sit here, waiting until we get a confirmation email click
    return admin
      .signUp(username, email)
      .then((sessionInfo) => {
        cookies.set("sessionInfo", sessionInfo, {
          path: "/",
          maxAge,
        });
        dispatch({
          type: Actions.InnerType.FinishSignIn,
          sessionInfo,
          username,
        });
        if (callback) callback(sessionInfo);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
  [Actions.AsyncType.FetchOrgs]: ({ dispatch }) => async ({ callback }) => {
    dispatch({ type: Actions.InnerType.StartSignIn });
    admin.context = pickupCookies(admin.context as Context);
    return admin
      .listOrgs()
      .then((orgs) => {
        dispatch({ type: Actions.InnerType.FinishFetchOrgs, orgs });
        if (callback) callback(orgs);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
};
