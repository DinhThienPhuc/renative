import { ParamListBase, RouteProp } from "@react-navigation/native";
import type { ReactElement, ReactNode } from "react";

/**
 * Common Functional Component type
 */
export type TComponent = () => ReactNode;

/**
 * High Order Component type
 */
export type THighOrderComponent = (
  component: ReactElement | ReactNode | (() => ReactNode),
) => ReactNode;

/**
 * Function Iterator type used in map, filter, reduce method, etc
 */
export type TIterator = <T>(value: T, index?: number, array?: T[]) => unknown;

/**
 * Function type with specific return type
 */
export type TFunction<RT> = <T>(item?: T) => RT;

/**
 * Abstract try/catch wrapper
 */
export type TAsyncBoundary<T> = {
  error: unknown | null;
  result: T | null;
};

/**
 * Common variants
 */
export type TVariant =
  | "filled"
  | "outlined"
  | "standard"
  | "contained"
  | "text";

/**
 * Common size
 */
export type TSize = "tiny" | "small" | "medium" | "large";

/**
 * Override any type for bypass linter
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TAny = any;

/**
 * Unit of element size type
 */
export type TSizeUnit = "px" | "rem" | "em";

/**
 * Options for screen navigator. Use for both StackNavigator and StackScreen
 */
export type TNavigatorOption =
  | Record<string, unknown>
  | ((props: {
      route: RouteProp<ParamListBase>;
      navigation: TAny;
    }) => Record<string, unknown>);
