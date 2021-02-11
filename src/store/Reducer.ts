import { Reducer } from "react";
import { AsyncActionHandlers } from "use-reducer-async";
import Cookies from "universal-cookie";

import { State, initialState } from "./State";
import * as Actions from "./Actions";
import { admin, Context } from "./Textile";

export const cookies = new Cookies();

const maxAge = 60 * 60 * 24 * 7; // TODO: Pick a better time (1 week)

const withCookiesAndState = (context: Context, state?: State) => {
  return context.withSession(cookies.get("sessionInfo").session);
};

export const reducer: Reducer<State, Actions.Action> = (
  state,
  action
): State => {
  switch (action.type) {
    // Error handling
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
    // Signout
    case Actions.OuterType.SignOut:
      // TODO: This is bad, this should be a pure function...
      cookies.remove("sessionInfo");
      return { ...initialState };
    // SignUp and SignIn
    case Actions.InnerType.StartSignUp:
    case Actions.InnerType.StartSignIn:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishSignUp:
    case Actions.InnerType.FinishSignIn:
      return {
        ...state,
        loading: false,
      };
    // FetchKeys
    case Actions.InnerType.StartFetchKeys:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishFetchKeys: {
      const { keys } = action;
      return {
        ...state,
        loading: false,
        user: { ...state.user, keys },
      };
    }
    // CreateKey
    case Actions.InnerType.StartCreateKey:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishCreateKey: {
      const { key } = action;
      const keys = [...(state.user.keys ?? []), key];
      return {
        ...state,
        loading: false,
        user: { ...state.user, keys },
      };
    }
    // RevokeKey
    case Actions.InnerType.StartRevokeKey:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishRevokeKey: {
      const { key } = action;
      const keys = (state.user.keys ?? [])?.filter((k) => k.key !== key);
      return {
        ...state,
        loading: false,
        user: { ...state.user, keys },
      };
    }
    // FetchSessionInfo
    case Actions.InnerType.StartFetchSessionInfo:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishFetchSessionInfo: {
      const { sessionInfo } = action;
      return {
        ...state,
        loading: false,
        user: { ...state.user, sessionInfo },
      };
    }
    // FetchOrgs
    case Actions.InnerType.StartFetchOrgs:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishFetchOrgs: {
      const { orgs } = action;
      return {
        ...state,
        loading: false,
        user: { ...state.user, orgs },
      };
    }
    // CreateOrg
    case Actions.InnerType.StartCreateOrg:
      return {
        ...state,
        loading: true,
      };
    case Actions.InnerType.FinishCreateOrg: {
      const { org } = action;
      const orgs = [...(state.user.orgs ?? []), org];
      return {
        ...state,
        loading: false,
        user: { ...state.user, orgs },
      };
    }
    default:
      throw new Error("Unknown action type");
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
  [Actions.AsyncType.FetchKeys]: ({ dispatch, getState }) => async ({
    org,
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartFetchKeys });
    admin.context = withCookiesAndState(admin.context as Context, getState());
    return admin
      .listKeys(org)
      .then((keys) => {
        keys = keys.filter((key) => key.valid);
        dispatch({ type: Actions.InnerType.FinishFetchKeys, keys });
        if (callback) callback(keys);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
  [Actions.AsyncType.CreateKey]: ({ dispatch }) => async ({
    org,
    keyType,
    secure,
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartCreateKey });
    admin.context = withCookiesAndState(admin.context as Context);
    return admin
      .createKey(keyType, secure, org)
      .then((key) => {
        dispatch({ type: Actions.InnerType.FinishCreateKey, key });
        if (callback) callback(key);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
  [Actions.AsyncType.RevokeKey]: ({ dispatch }) => async ({
    key,
    org,
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartRevokeKey });
    admin.context = withCookiesAndState(admin.context as Context);
    return admin
      .invalidateKey(key, org)
      .then(() => {
        dispatch({ type: Actions.InnerType.FinishRevokeKey, key });
        if (callback) callback(key);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
  [Actions.AsyncType.FetchSessionInfo]: ({ dispatch }) => async ({
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartFetchKeys });
    admin.context = withCookiesAndState(admin.context as Context);
    admin.context.withOrg("");
    return admin
      .getSessionInfo()
      .then((sessionInfo) => {
        dispatch({
          type: Actions.InnerType.FinishFetchSessionInfo,
          sessionInfo,
        });
        if (callback) callback(sessionInfo);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
  [Actions.AsyncType.FetchOrgs]: ({ dispatch, getState }) => async ({
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartFetchOrgs });
    admin.context = withCookiesAndState(admin.context as Context, getState());
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
  [Actions.AsyncType.CreateOrg]: ({ dispatch }) => async ({
    name,
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartCreateOrg });
    admin.context = withCookiesAndState(admin.context as Context);
    return admin
      .createOrg(name)
      .then((org) => {
        dispatch({
          type: Actions.InnerType.FinishCreateOrg,
          org,
        });
        if (callback) callback(org);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
  [Actions.AsyncType.LeaveOrg]: ({ dispatch }) => async ({
    name,
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartLeaveOrg });
    admin.context = withCookiesAndState(admin.context as Context);
    return admin
      .leaveOrg(name)
      .then(() => {
        dispatch({
          type: Actions.InnerType.FinishLeaveOrg,
          name,
        });
        if (callback) callback(name);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
  [Actions.AsyncType.InviteToOrg]: ({ dispatch }) => async ({
    name,
    email,
    callback,
  }) => {
    dispatch({ type: Actions.InnerType.StartInviteToOrg });
    admin.context = withCookiesAndState(admin.context as Context);
    return admin
      .inviteToOrg(email, name)
      .then((invite) => {
        dispatch({
          type: Actions.InnerType.FinishInviteToOrg,
          invite,
        });
        if (callback) callback(invite);
      })
      .catch((e) => {
        dispatch({ type: Actions.OuterType.SetError, message: e.message });
        if (callback) callback(undefined, e);
      });
  },
};
