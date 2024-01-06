import { TAny } from "@phantomthief/renative.utils.definations";
import { ReactNode } from "react";

export type TTheme = "light" | "dark";

export type TThemeContext = {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
  colors: Record<string, TAny>;
};

export interface IThemeProps {
  schema?: TAny;
  defaultTheme?: TTheme;
  children?: ReactNode;
}
