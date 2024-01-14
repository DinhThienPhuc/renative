import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { INativeStackNavigatorProps } from "./_types";

const Stack = createNativeStackNavigator();

export const NativeStackNavigator = ({
  navigatorProps = {},
  screens = [],
}: INativeStackNavigatorProps) => {
  const content = useMemo(
    () =>
      screens.map((s) => (
        <Stack.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={s.options}
        />
      )),
    [screens],
  );

  return <Stack.Navigator {...navigatorProps}>{content}</Stack.Navigator>;
};
