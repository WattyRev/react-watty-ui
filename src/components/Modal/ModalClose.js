import React from "react";
import styled from "styled-components";
import { Icon } from "../../index";

const ModalCloseStyle = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

/**
 * A component used as a close button in the upper right corner of a modal.
 */
const ModalClose = props => <ModalCloseStyle icon="times" {...props} />;
export default ModalClose;
