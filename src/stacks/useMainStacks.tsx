import { useTheme } from "$services";
import { BOTTOM_BAR_HEIGHT, FONT, IRenderIconParams, TAny } from "$utils";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useCallback, useMemo } from "react";

const useMainStacks = () => {
  const { colors } = useTheme();

  const getScreen = useCallback(
    (
      screenComponent: TAny,
      name: string,
      {
        icon,
        focusedColor,
        normalColor,
        size,
      }: Omit<IRenderIconParams, "focused" | "color" | "size"> & {
        normalColor?: string;
        focusedColor?: string;
        size?: number;
      },
    ) => ({
      name,
      component: screenComponent,
      options: {
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }: IRenderIconParams) => (
          <FontAwesomeIcon
            icon={icon}
            color={
              focused
                ? focusedColor ?? colors.menu.activatedItem
                : normalColor ?? colors.menu.item
            }
            size={size ?? FONT.SIZE.LG}
          />
        ),
      },
    }),
    [colors.menu.activatedItem, colors.menu.item],
  );

  const mainNavigatorProps = useMemo(
    () => ({
      screenOptions: {
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.body,
          height: BOTTOM_BAR_HEIGHT,
          shadowColor: colors.menu.borderShadow,
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.04,
          shadowRadius: 15,
          elevation: 4,
          borderTopColor: "transparent",
        },
      },
    }),
    [colors.body, colors.menu.borderShadow],
  );

  const commonScreensNavigationProps = useMemo(
    () => ({
      screenOptions: {
        headerTintColor: colors.text.primary,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.body,
          borderBottom: "none",
        },
      },
    }),
    [colors.body, colors.text.primary],
  );

  return { mainNavigatorProps, getScreen, commonScreensNavigationProps };
};

export default useMainStacks;
