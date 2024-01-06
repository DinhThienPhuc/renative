import React, { createContext, useContext, useMemo, useState } from "react";

import { THEMES } from "./_constants";
import defaultSchema from "./_schema.json";
import { IThemeProps, TTheme, TThemeContext } from "./_types";

const ThemeContext = createContext<TThemeContext>({
  theme: THEMES.DARK,
  setTheme: () => "",
  colors: {},
});

export const ThemesProvider = ({
  schema = defaultSchema,
  defaultTheme = THEMES.DARK,
  children,
}: IThemeProps) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  const colors = useMemo(
    () => (theme ? schema?.[theme] : schema?.[defaultTheme]),
    [defaultTheme, schema, theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { setTheme, theme, colors } = useContext(ThemeContext);
  return { setTheme, theme, colors };
};
