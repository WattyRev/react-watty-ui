import React from "react";
import { shallow, mount } from "enzyme";
import Theme from "../../../index";
import Dropdown, { StyledDropdown, Item, Spacer } from "../Dropdown";

describe("Dropdown", () => {
  it("renders", () => {
    const wrapper = shallow(
      <Dropdown dropdownContent={() => <div>test</div>}>
        {() => <div>test2</div>}
      </Dropdown>
    );
    expect(wrapper).toBeDefined();
  });
  it("renders when using the provided components", () => {
    const wrapper = shallow(
      <Dropdown dropdownContent={() => <div>test</div>}>
        {data => (
          <React.Fragment>
            <data.components.Item>Item</data.components.Item>
            <data.components.Spacer />
          </React.Fragment>
        )}
      </Dropdown>
    );
    expect(wrapper).toBeDefined();
  });
  it("renders the dropdown content when open is triggered", () => {
    expect.assertions(2);
    const wrapper = shallow(
      <Dropdown dropdownContent={() => <div className="target">test</div>}>
        {data => (
          <div className="click-open" onClick={data.actions.open}>
            test2
          </div>
        )}
      </Dropdown>
    );
    expect(wrapper.find(".target")).toHaveLength(0);
    wrapper.find(".click-open").simulate("click");
    expect(wrapper.find(".target")).toHaveLength(1);
  });
  it("removes the dropdown content when close is triggered", () => {
    expect.assertions(2);
    const wrapper = shallow(
      <Dropdown dropdownContent={() => <div className="target">test</div>}>
        {data => (
          <React.Fragment>
            <div className="click-open" onClick={data.actions.open}>
              test2
            </div>
            <div className="click-close" onClick={data.actions.close}>
              test3
            </div>
          </React.Fragment>
        )}
      </Dropdown>
    );
    wrapper.find(".click-open").simulate("click");
    expect(wrapper.find(".target")).toHaveLength(1);
    wrapper.find(".click-close").simulate("click");
    expect(wrapper.find(".target")).toHaveLength(0);
  });
  it("can remove the dropdown when triggered within the dropdown", () => {
    expect.assertions(2);
    const wrapper = shallow(
      <Dropdown
        dropdownContent={data => (
          <React.Fragment>
            <div className="target">test</div>
            <div className="click-close" onClick={data.actions.close}>
              test3
            </div>
          </React.Fragment>
        )}
      >
        {data => (
          <div className="click-open" onClick={data.actions.open}>
            test2
          </div>
        )}
      </Dropdown>
    );
    wrapper.find(".click-open").simulate("click");
    expect(wrapper.find(".target")).toHaveLength(1);
    wrapper.find(".click-close").simulate("click");
    expect(wrapper.find(".target")).toHaveLength(0);
  });

  describe("#autoClose", () => {
    it("does not close the dropdown is it is not open", () => {
      expect.assertions(1);
      const subject = new Dropdown();
      subject.state.isOpen = false;
      subject.close = jest.fn();

      subject.autoClose();

      expect(subject.close).not.toHaveBeenCalled();
    });
    it("does not close the dropdown if the click event is from inside the dropdown", () => {
      expect.assertions(1);
      const subject = new Dropdown();
      subject.state.isOpen = true;
      subject.node = {
        contains: jest.fn().mockReturnValue(true)
      };
      subject.close = jest.fn();

      subject.autoClose({
        target: "foo"
      });

      expect(subject.close).not.toHaveBeenCalled();
    });
    it("closes the dropdown", () => {
      expect.assertions(1);
      const subject = new Dropdown();
      subject.state.isOpen = true;
      subject.node = {
        contains: jest.fn().mockReturnValue(false)
      };
      subject.close = jest.fn();

      subject.autoClose({
        target: "foo"
      });

      expect(subject.close).toHaveBeenCalled();
    });
  });

  describe("StyledDropdown", () => {
    it("renders", () => {
      const wrapper = mount(<StyledDropdown theme={Theme} />);
      expect(wrapper).toBeDefined();
    });
    it("aligns the dropdown and the text if align is set to right", () => {
      const wrapper = mount(<StyledDropdown theme={Theme} align="right" />);
      expect(wrapper).toHaveStyleRule("right", "0px");
      expect(wrapper).not.toHaveStyleRule("left", "0px");
      expect(wrapper).toHaveStyleRule("text-align", "right");
    });
    it("aligns the dropdown and the text to the left if align is set to left", () => {
      const wrapper = mount(<StyledDropdown theme={Theme} align="left" />);
      expect(wrapper).not.toHaveStyleRule("right", "0px");
      expect(wrapper).toHaveStyleRule("left", "0px");
      expect(wrapper).toHaveStyleRule("text-align", "left");
    });
    it("aligns the dropdown and the text to the left if align is not set", () => {
      const wrapper = mount(<StyledDropdown theme={Theme} />);
      expect(wrapper).not.toHaveStyleRule("right", "0px");
      expect(wrapper).toHaveStyleRule("left", "0px");
      expect(wrapper).toHaveStyleRule("text-align", "left");
    });
  });

  describe("Item", () => {
    it("renders", () => {
      const wrapper = mount(<Item theme={Theme} />);
      expect(wrapper).toBeDefined();
    });
    it("shows as black with a pointer cursor", () => {
      const wrapper = mount(<Item theme={Theme} />);
      expect(wrapper).toHaveStyleRule("color", Theme.colors.black);
      expect(wrapper).toHaveStyleRule("cursor", "pointer");
    });
    it("shows as gray with a default cursor when disabled", () => {
      const wrapper = mount(<Item theme={Theme} disabled />);
      expect(wrapper).toHaveStyleRule("color", Theme.colors.gray);
      expect(wrapper).toHaveStyleRule("cursor", "default");
    });
  });
  describe("Spacer", () => {
    it("renders", () => {
      const wrapper = mount(<Spacer theme={Theme} />);
      expect(wrapper).toBeDefined();
    });
  });
});
