import { IFlexProps } from "./_types";
import React from "react";
import { View } from "react-native";

export const Flex = ({
  children,
  style,
  flexDirection = "column",
  alignItems = "flex-start",
  justifyContent = "center",
  gap = 12,
  flex = 1,
  ...props
}: IFlexProps) => (
  <View
    {...props}
    style={[
      style,
      {
        flex,
        flexDirection,
        alignItems,
        justifyContent,
        gap,
      },
    ]}
  >
    {children}
  </View>
);
