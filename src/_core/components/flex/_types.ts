import { FlexAlignType, ViewProps } from "react-native";

export interface IFlexProps extends ViewProps {
  alignItems?: FlexAlignType | undefined;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  flexDirection?:
    | "row"
    | "column"
    | "row-reverse"
    | "column-reverse"
    | undefined;
  gap?: number | undefined;
  flex?: number | undefined;
}
