import { BottomTabsNavigator } from "$navigations";
import { useMemo } from "react";
import useMainStacks from "./useMainStacks";
import { HomeStackScreens } from "./home";
import { AlarmStackScreens } from "./alarm";
import { AlarmCreatorStackScreens } from "./alarm-creator";
import { TaskStackScreens } from "./task";
import { SettingStackScreens } from "./setting";

export const MainStackScreens = () => {
  const { getScreen, mainNavigatorProps } = useMainStacks();

  const screens = useMemo(
    () => [
      getScreen(HomeStackScreens, "HomeStack", { icon: "house" }),
      getScreen(AlarmStackScreens, "AlarmStack", { icon: "bell" }),
      getScreen(AlarmCreatorStackScreens, "AlarmCreatorStack", {
        icon: "circle-plus",
        size: 36,
      }),
      getScreen(TaskStackScreens, "TaskStack", { icon: "list-check" }),
      getScreen(SettingStackScreens, "SettingRoot", { icon: "gear" }),
    ],
    [getScreen],
  );

  return (
    <BottomTabsNavigator
      navigatorProps={mainNavigatorProps}
      screens={screens}
    />
  );
};
