import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { AutocompleteList } from "../AutocompleteList/AutocompleteList";

describe("<AutocompleteList/>", () => {
  it("renders without error.", () => {
    const component = shallow(<AutocompleteList autocompleteList={[]} />);
    const section = findByTestAttr(component, "autocompleteList");
    expect(section.length).toBe(1);
  });
});
