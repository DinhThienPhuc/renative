import { NativeStackNavigator } from "$navigations";
import { HomeDetailScreen, HomeScreen } from "$screens";
import useMainStacks from "../useMainStacks";

export const HomeStackScreens = () => {
  const { commonScreensNavigationProps } = useMainStacks();

  return (
    <NativeStackNavigator
      navigatorProps={commonScreensNavigationProps}
      screens={[
        {
          name: "Home",
          component: HomeScreen,
          options: {
            title: "Home",
          },
        },
        {
          name: "HomeDetail",
          component: HomeDetailScreen,
          options: {
            title: "Home detail",
          },
        },
      ]}
    />
  );
};
