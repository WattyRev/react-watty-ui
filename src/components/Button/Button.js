import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TYPOGRAPHY_STYLES } from "../Text/Text";

const StyledButton = styled.button`
  ${TYPOGRAPHY_STYLES};
  background: linear-gradient(
    -45deg,
    ${props => props.theme.colors.silver},
    ${props => props.theme.colors.silver},
    ${props => props.theme.colors.gray},
    ${props => props.theme.colors.gray}
  );
  background-size: 400% 400%;
  background-position: 100% 50%;
  border-radius: 4px;
  border: 0;
  padding: 4px 8px;
  margin: 8px 0;
  cursor: pointer;
  transition: 0.6s background;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.colors.black};

  &:hover {
    background-position: 0% 50%;
  }
  &.is-primary {
    background-image: linear-gradient(
      -45deg,
      ${props => props.theme.colors.blue},
      ${props => props.theme.colors.blue},
      ${props => props.theme.colors.blueDarker},
      ${props => props.theme.colors.blueDarker}
    );
    color: ${({ theme }) => theme.colors.silver};
  }
  &.is-block {
    display: block;
    width: 100%;
  }
  &[disabled] {
    opacity: 0.5;
    box-shadow: none;
    cursor: not-allowed;
  }
`;

/**
 * A styled Button
 */
const Button = ({ isPrimary, isBlock, children, className, ...props }) => {
  const classes = className ? [className] : [];
  if (isPrimary) {
    classes.push("is-primary");
  }
  if (isBlock) {
    classes.push("is-block");
  }
  return (
    <StyledButton className={classes.join(" ")} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Denotes a primary button */
  isPrimary: PropTypes.bool,
  /** Denotes a block button which will change size to fill its container */
  isBlock: PropTypes.bool,
  /** The contents of the button */
  children: PropTypes.node,
  /** Classes to add to the button */
  className: PropTypes.string
};

Button.defaultProps = {
  isPrimary: false,
  isBlock: false,
  children: null,
  className: null
};

export default Button;
