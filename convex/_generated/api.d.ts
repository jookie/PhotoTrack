/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.13.0.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as actions_openai from "../actions/openai";
import type * as identity from "../identity";
import type * as messages from "../messages";
import type * as threads from "../threads";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  "actions/openai": typeof actions_openai;
  identity: typeof identity;
  messages: typeof messages;
  threads: typeof threads;
}>;
