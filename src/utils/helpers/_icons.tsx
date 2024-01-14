import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IRenderIconParams } from "../definations";

export const renderIcon = (props: IRenderIconParams) => (
  <FontAwesomeIcon {...props} />
);
