/**
 * UserSessionInfo represents the live info of a hub session.
 * TODO: We don't really need to store it here, it can just be added to the
 * client's context...
 */
export interface UserSessionInfo {
  key: string;
  session: string;
}

/**
 * User represents the app User state.
 * Use it for things like UI settings and user options.
 */
export interface User {
  authorized?: boolean;
  // TODO: We don't really need this here... see above
  sessionInfo?: UserSessionInfo;
}

/**
 * Hub represents the Hub API state.
 * Use it to reflect the local view of the remote Hub state.
 */
export interface Hub {
  count: number; // TODO: Remove these fake values
}

/**
 * State represents the overall app state.
 * Use it as the top-level access point for all state.
 */
export interface State {
  user?: User;
  hub?: Hub;
  // Top-level state items, keep these to a minimum
  loading: boolean;
  error?: string;
}

// Initial state reflects an un-authorized, empty user/hub state.
export const initialState: State = {
  user: { authorized: false },
  hub: { count: 0 },
  loading: false,
};
