import { createContext } from "react";

import type { State } from "./State";
import type { Actions } from "./Actions";

const Context = createContext<[State, Actions]>({} as any);

export default Context;
