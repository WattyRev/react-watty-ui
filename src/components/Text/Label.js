import React from "react";
import styled from "styled-components";
import Text from "./Text";

const StyledLabel = styled(Text)`
  margin: 8px 0 4px;
  display: block;
  font-weight: 600;
`;

/**
 * A styled `<label>` element.
 * This uses `<Text>` and passes arguments there.
 */
const Label = props => <StyledLabel as="label" {...props} />;
export default Label;
