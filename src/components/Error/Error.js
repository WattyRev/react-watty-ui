import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "../../index";

const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.red};
  border: 1px solid ${({ theme }) => theme.colors.red};
  padding: 4px;
  margin: 0 0 8px;
  border-radius: 4px;
  display: flex;

  > .error-icon {
    padding: 1px 4px 0 0;
  }
`;

/**
 * Displays an error box that can house any type of content.
 */
const Error = ({ children, ...props }) => (
  <StyledError {...props}>
    <Icon className="error-icon" icon="exclamation-circle" />
    <div>{children}</div>
  </StyledError>
);

Error.propTypes = {
  children: PropTypes.node
};

Error.defaultProps = {
  children: null
};

/** @component */
export default Error;
