import React from "react";
import { shallow } from "enzyme";
import { FiltersList } from "../FiltersList/FiltersList";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";

describe("<FiltersList/>", () => {
  it("renders without error.", () => {
    const component = shallow(<FiltersList />);
    const ul = findByTestAttr(component, "filtersList");
    expect(ul.length).toBe(1);
  });
});
