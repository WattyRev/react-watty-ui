import React from "react";
import styled from "styled-components";
import Text from "./Text";

const StyledH3 = styled(Text)`
  font-size: 18px;
  line-height: 24px;
`;

/**
 * A styled `<h3>` element.
 * This uses `<Text>` and passes arguments there.
 * @param {Node} children The items to render inside the <h3>
 */
const H3 = props => <StyledH3 as="h3" {...props} />;
export default H3;
