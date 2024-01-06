import { NativeStackNavigator } from "$navigations";
import { SettingDetailScreen, SettingsScreen } from "$screens";
import useMainStacks from "../useMainStacks";

export const SettingStackScreens = () => {
  const { commonScreensNavigationProps } = useMainStacks();

  return (
    <NativeStackNavigator
      navigatorProps={commonScreensNavigationProps}
      screens={[
        {
          name: "Settings",
          component: SettingsScreen,
          options: {
            title: "Settings",
          },
        },
        {
          name: "SettingDetail",
          component: SettingDetailScreen,
          options: {
            title: "Setting detail",
          },
        },
      ]}
    />
  );
};
