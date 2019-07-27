import React from "react";
import { mount } from "enzyme";
import Theme from "../../../index";
import TextButton from "../TextButton";

describe("TextButton", () => {
  it("renders", () => {
    mount(<TextButton theme={Theme} />);
  });
});
