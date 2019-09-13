import React from "react";
import { mount } from "enzyme";
import theme, { Textarea } from "../../../index";

describe("Textarea", () => {
  it("renders", () => {
    expect.assertions(1);
    const wrapper = mount(<Textarea theme={theme} />);
    expect(wrapper).toBeDefined();
  });
});
