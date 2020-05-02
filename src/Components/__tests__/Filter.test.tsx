import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { Filter } from "../Filter/Filter";

describe("<Filter/>", () => {
  it("renders without error.", () => {
    const component = shallow(
      <Filter filter="" setFilters={(e) => {}} displayMode="" />
    );
    const li = findByTestAttr(component, "filter");
    expect(li.length).toBe(1);
  });
});
