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

/**
 * Render this component at the top of your app to enable the <Icon> component to work.
 */
const FontAwesome = () => {
  setupFontAwesome();
  return null;
};

/** @component */
export default FontAwesome;
