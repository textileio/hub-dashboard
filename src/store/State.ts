import type { OrgInfo } from "@textile/hub-admin/dist/cjs/api";

export type { OrgInfo };

/**
 * UserSessionInfo represents the live info of a hub session.
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
  username?: string;
  orgs?: OrgInfo[];
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
  user: User;
  hub?: Hub;
  // Top-level state items, keep these to a minimum
  loading: boolean;
  error?: string;
  // fake data+
  fakeOrganizations: any[];
  fakeKeys: any[];
}

// Initial state reflects an un-authorized, empty user/hub state.
export const initialState: State = {
  user: {},
  hub: { count: 0 },
  loading: false,

  // ! fake Organizations
  fakeOrganizations: [
    {
      name: "FakeOrg1",
      url: "fakeurl.fakeorg.ok",
      publicKey: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
      members: 8,
    },
    {
      name: "AnotherOrg",
      url: "fakeurl.otherorg.ok",
      publicKey: "tryiytriuortyiouyouitruriotyuiyrtyrtioytiruo",
      members: 2,
    },
  ],

  // ! fake Keys
  fakeKeys: [
    {
      publicKey: "hjkadshjdsahjkadshjkdashjkdasjhkdsakhjdas",
      secretKey: "ajskdjkhdashjkdsahjadshjkdashkjdsahjkadshkjdaskhjdaskjhads",
      type: "account",
      secure: false,
      valid: true,
      threads: 5,
    },
    {
      publicKey: "yuewqiuyieqwuiyqewyuieqwuiyqweuyieqwuyiqew",
      secretKey: "xczjkcxkjjxkczljkxcjkxcjkcxjkxcjkxcjxkcjkxcjkxcjkxcjckxkjxc",
      type: "usergroup",
      secure: true,
      valid: false,
      threads: 5,
    },
    {
      publicKey: "sadasdasdasdasdasdasdasdasdasdasd",
      secretKey: "hjgkhjgjhhjkhjkjhgkjhghgjjhgkgjhkgjhjhgkhjgkjhgk",
      type: "account",
      secure: true,
      valid: false,
      threads: 5,
    },
  ],
};
