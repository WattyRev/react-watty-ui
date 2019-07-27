import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const ICON_NAMES = [
  "angle-down",
  "cog",
  "edit",
  "ellipsis-h",
  "eraser",
  "exclamation-circle",
  "eye",
  "eye-slash",
  "home",
  "image",
  "info",
  "magic",
  "palette",
  "plus",
  "redo",
  "save",
  "share",
  "sign-out-alt",
  "spinner",
  "undo",
  "times",
  "trash"
];

/**
 * Renders an icon with the provided icon name
 */
const Icon = ({ icon, ...props }) => <FontAwesomeIcon icon={icon} {...props} />;

Icon.propTypes = {
  /** The name of the icon to render */
  icon: PropTypes.oneOf(ICON_NAMES)
};
export default Icon;
