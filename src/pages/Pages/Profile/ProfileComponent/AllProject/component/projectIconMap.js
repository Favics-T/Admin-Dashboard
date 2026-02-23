import { FaSlack } from "react-icons/fa";
import { SiAdobeindesign, SiAdobephotoshop } from "react-icons/si";

const PROJECT_ICON_MAP = {
  "adobe-indesign": SiAdobeindesign,
  "adobe-photoshop": SiAdobephotoshop,
  slack: FaSlack,
};

export const getProjectIcon = (iconKey) => PROJECT_ICON_MAP[iconKey] ?? null;
