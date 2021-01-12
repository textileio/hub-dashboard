import type { Dispatch } from "react";

/**
 * InnerType are internal action types.
 */
export enum InnerType {
  StartFetch = "START_FETCH",
  FinishFetch = "FINISH_FETCH",
  ErrorFetch = "ERROR_FETCH",
}

/**
 * OuterType are externally accessible action types.
 */
export enum OuterType {
  Increment = "INCREMENT",
}

/**
 * AsyncType are externally accessible action types.
 */
export enum AsyncType {
  FetchPerson = "FETCH_PERSON",
}

/**
 * InnterAction are internal sync actions.
 */
export type InnerAction =
  | { type: InnerType.StartFetch }
  | { type: InnerType.FinishFetch; firstName: string }
  | { type: InnerType.ErrorFetch; message: string };

/**
 * OuterAction are external sync actions.
 */
export type OuterAction = { type: OuterType.Increment };

/**
 * Action represents all possible sync actions.
 */
export type Action = InnerAction | OuterAction;

/**
 * AsyncAction represents all possible async actions.
 */
export type AsyncAction = { type: AsyncType.FetchPerson; id: number };

/**
 * Actions defines the access patterns for actions on our store.
 */
export interface Actions {
  increment: () => void;
  fetchPerson(id: number): void;
}

export function createActions(
  dispatch: Dispatch<OuterAction | AsyncAction>
): Actions {
  const increment = () => dispatch({ type: OuterType.Increment });
  const fetchPerson = (id: number) =>
    dispatch({ type: AsyncType.FetchPerson, id });

  return { increment, fetchPerson };
}
