import { TAsyncBoundary } from "@phantomthief/renative.utils.definations";

/**
 * Beautiful version of try/catch block
 * @param promise Async task
 * @returns Object contains result and error of async task call
 */
export const tryDo = async <T>(
  promise: Promise<T>,
): Promise<TAsyncBoundary<T>> => {
  try {
    const result = await promise;
    return {
      error: null,
      result: result as T,
    };
  } catch (error) {
    return {
      error,
      result: null,
    };
  }
};

/**
 * Safety parse JSON function
 * @param jsonString JSON data in string format
 * @returns JSON object
 */
export const parseJSON = <T>(jsonString: string | null): T | null => {
  try {
    return jsonString === "undefined" ? null : JSON.parse(jsonString ?? "");
  } catch (error) {
    return null;
  }
};

/**
 * A function do nothing
 * @returns Safety value
 */
export const doNothing = () => {
  return undefined;
};

/**
 * Capitalize word
 * @param word Word to be modify
 * @returns
 */
export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);
