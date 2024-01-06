import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useMemo } from "react";
import { IBottomTabsNavigatorProps } from "./_types";

const Stack = createBottomTabNavigator();

export const BottomTabsNavigator = ({
  navigatorProps = {},
  screens = [],
}: IBottomTabsNavigatorProps) => {
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
