import React from "react";
import Text from "./Text";

/**
 * A styled `<p>` element.
 * This uses `<Text>` and passes arguments there.
 * @param {Node} children The items to render inside the <p>
 */
const P = props => <Text as="p" {...props} />;
export default P;
