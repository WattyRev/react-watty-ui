import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import BodyPortal from "../../utils/BodyPortal";

const backdropAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  },
  100% {
    background-position: 100% 100%;
  }
`;

/**
 * Styling for the modal's backdrop
 */
const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(-45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  background-size: 400% 400%;
  background-position: 100% 100%;
  z-index: 100;
  animation: ${backdropAnimation} 0.6s;
`;

const modalAnimation = keyframes`
  0% {
    opacity: 0
  }

  15% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
`;

/**
 * Styling for the modal window itself
 */
export const StyledModal = styled.div`
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 300px;
  background: ${props => props.theme.colors.white};
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  animation: ${modalAnimation} 0.8s;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  z-index: 100;
`;

/**
 * A basic modal
 */
const Modal = ({ children, isOpen, onBackdropClick }) => (
  <React.Fragment>
    {isOpen && (
      <BodyPortal>
        <ModalBackdrop onClick={onBackdropClick} className="testing_backdrop" />
        <ModalWrapper>
          <StyledModal className="testing_modal">{children}</StyledModal>
        </ModalWrapper>
      </BodyPortal>
    )}
  </React.Fragment>
);

Modal.defaultProps = {
  onBackdropClick() {}
};

Modal.propTypes = {
  /** Content to render inside the modal */
  children: PropTypes.node,
  /** Indiciates if the modal should be open or not */
  isOpen: PropTypes.bool,
  /** Called when the user clicks on the backdrop */
  onBackdropClick: PropTypes.func
};

export default Modal;
