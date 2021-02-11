import type {
  OrgInfo,
  KeyInfo,
  SessionInfoResponse,
  SigninOrSignupResponse,
} from "@textile/hub-admin";
import { KeyType } from "@textile/hub-admin";

export type { OrgInfo, KeyInfo, SessionInfoResponse, SigninOrSignupResponse };

export { KeyType };

/**
 * User represents the app User state.
 * Use it for things like UI settings and user options.
 */
export interface User {
  /**
   * Info about the current session user.
   */
  sessionInfo?: SessionInfoResponse;
  /**
   * The set of orgs available to the session user.
   */
  orgs?: OrgInfo[];
  /**
   * The set of keys available to the current user/org
   */
  keys?: KeyInfo[];
}

/**
 * State represents the overall app state.
 * Use it as the top-level access point for all state.
 */
export interface State {
  user: User;
  // Top-level state items, keep these to a minimum
  loading: boolean;
  error?: string;
}

// Initial state reflects an un-authorized, empty user/hub state.
export const initialState: State = {
  user: {},
  loading: false,
};
