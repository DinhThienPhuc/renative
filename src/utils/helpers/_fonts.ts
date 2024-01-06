import { TextStyle } from "react-native";
import { FONT, LINE_HEIGHT } from "../constants/_fonts";

export const getFontStyle = (customFont: TextStyle): TextStyle => {
  return {
    fontFamily: customFont.fontFamily ?? FONT.FAMILY.POPPINS,
    fontSize: customFont.fontSize ?? FONT.SIZE.LG,
    fontStyle: customFont.fontStyle,
    fontWeight: customFont.fontWeight,
    lineHeight: customFont.lineHeight ?? LINE_HEIGHT.LG,
  };
};
