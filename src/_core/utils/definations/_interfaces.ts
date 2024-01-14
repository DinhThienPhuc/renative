import { ParamListBase, RouteProp } from "@react-navigation/native";
import { ComponentType } from "react";
import { TAny, TNavigatorOption } from "./_types";

/**
 * Extendable interface, can be inherited
 */
export interface IExtendable {
  [key: string]: unknown;
}

/**
 * Stack Navigator screen interface
 */
interface INavigatorScreenProps {
  name: string;
  component:
    | ComponentType<{
        route: RouteProp<ParamListBase, string>;
        navigation: TAny;
      }>
    | ComponentType<{}>;
  options?: TNavigatorOption;
}

/**
 * Stack Navigator props interface
 */
export interface INavigatorProps {
  navigatorProps?: {
    id?: string;
    initialRouteName?: string;
    screenOptions?: TNavigatorOption;
  };
  screens: INavigatorScreenProps[];
}

/**
 * Font style interface
 */
export interface IFont {
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: "normal" | "italic" | undefined;
  fontWeight?: number;
  lineHeight?: number;
}
