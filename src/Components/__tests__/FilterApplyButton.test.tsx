import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { FilterApplyButton } from "../FilterApplyButton/FilterApplyButton";

describe("<FilterApplyButton/>", () => {
  it("renders without error.", () => {
    const component = shallow(
      <FilterApplyButton filter="" handleClick={() => {}} />
    );
    const li = findByTestAttr(component, "filterApplyButton");
    expect(li.length).toBe(1);
  });
});
