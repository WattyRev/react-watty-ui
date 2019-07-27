import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faCog,
  faEdit,
  faEllipsisH,
  faEraser,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faHome,
  faImage,
  faInfo,
  faMagic,
  faPalette,
  faPlus,
  faRedo,
  faSave,
  faShare,
  faSignOutAlt,
  faSpinner,
  faUndo,
  faTimes,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

export function setupFontAwesome() {
  library.add(
    faAngleDown,
    faCog,
    faEdit,
    faEllipsisH,
    faEraser,
    faExclamationCircle,
    faEye,
    faEyeSlash,
    faHome,
    faImage,
    faInfo,
    faMagic,
    faPalette,
    faPlus,
    faRedo,
    faSave,
    faShare,
    faSignOutAlt,
    faSpinner,
    faUndo,
    faTimes,
    faTrash
  );
}

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

const Icon = props => <FontAwesomeIcon {...props} />;

Icon.propTypes = {
  /** The name of the icon to render */
  icon: PropTypes.oneOf(ICON_NAMES)
};

export default Icon;
