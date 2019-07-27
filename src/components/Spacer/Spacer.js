import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const sizes = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64
};

export const StyledSpacer = styled.span`
  margin-top: ${props => (props.top ? sizes[props.top] : 0)}px;
  margin-bottom: ${props => (props.bottom ? sizes[props.bottom] : 0)}px;
  margin-left: ${props => (props.left ? sizes[props.left] : 0)}px;
  margin-right: ${props => (props.right ? sizes[props.right] : 0)}px;
`;

/**
 * Adds spacing in any direction
 */
const Spacer = props => <StyledSpacer {...props} />;

Spacer.propTypes = {
  /** Spacing to add below the Spacer */
  bottom: PropTypes.oneOf(Object.keys(sizes)),
  /** Spacing to add to the left of the Spacer */
  left: PropTypes.oneOf(Object.keys(sizes)),
  /** Spacing to add to the right of the Spacer */
  right: PropTypes.oneOf(Object.keys(sizes)),
  /** Spacing to add below the spacer */
  top: PropTypes.oneOf(Object.keys(sizes))
};

export default Spacer;
