/**
 * User represents the app User state.
 * Use it for things like UI settings and user options.
 */
export interface User {
  authorized?: boolean;
  firstName?: string; // TODO: Remove these fake values
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
}

// Initial state reflects an un-authorized, empty user/hub state.
export const initialState: State = {
  user: { authorized: false },
  hub: { count: 0 },
  loading: false,
};
