import * as colors from "./theme/colors";
import * as media from "./theme/media";
import * as patterns from "./theme/patterns";
import A from "./components/A/A";
import Alert, { success, warn, error } from "./components/Alert/Alert";
import BlockListItem from "./components/BlockListItem/BlockListItem";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import Error from "./components/Error/Error";
import FillToBottom from "./components/FillToBottom/FillToBottom";
import H1 from "./components/Text/H1";
import H2 from "./components/Text/H2";
import H3 from "./components/Text/H3";
import Icon, { ICON_NAMES } from "./components/Icon/Icon";
import FontAwesome from "./components/Icon/FontAwesome";
import Input from "./components/Input/Input";
import Label from "./components/Text/Label";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import ModalClose from "./components/Modal/ModalClose";
import ModalConfirm from "./components/Modal/ModalConfirm";
import ModalPrompt from "./components/Modal/ModalPrompt";
import P from "./components/Text/P";
import PageLoader from "./components/PageLoader/PageLoader";
import Select from "./components/Select/Select";
import Spacer from "./components/Spacer/Spacer";
import Text, { TYPOGRAPHY_STYLES } from "./components/Text/Text";
import TextButton from "./components/TextButton/TextButton";
import Tile from "./components/Tile/Tile";
import Tooltip from "./components/Tooltip/Tooltip";

const Theme = { colors, media, patterns };
export default Theme;

export {
  A,
  Alert,
  success,
  warn,
  error,
  BlockListItem,
  Button,
  Dropdown,
  Error,
  FillToBottom,
  H1,
  H2,
  H3,
  Icon,
  ICON_NAMES,
  FontAwesome,
  Input,
  Label,
  Loading,
  Modal,
  ModalClose,
  ModalConfirm,
  ModalPrompt,
  P,
  PageLoader,
  Select,
  Spacer,
  Text,
  TYPOGRAPHY_STYLES,
  TextButton,
  Tile,
  Tooltip
};
