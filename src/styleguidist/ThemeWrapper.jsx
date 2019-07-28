import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes";
import { setupFontAwesome } from "../index";

setupFontAwesome();

export default props => <ThemeProvider {...props} theme={theme} />;
