import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const initAllFontAwesomeIcons = () => {
  library.add(fab, far, fas);
};

export const initFabFontAwesomeIcons = () => {
  library.add(fab);
};
export const initFarFontAwesomeIcons = () => {
  library.add(far);
};
export const initFasFontAwesomeIcons = () => {
  library.add(fas);
};

export const initFontAwesomeIcons = (icons: IconDefinition[]) => {
  library.add(...icons);
};
