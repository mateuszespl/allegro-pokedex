import { FiltersButton } from "../FiltersButton/FiltersButton";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { shallow } from "enzyme";
import React from "react";

describe("<FiltersButton/>", () => {
  it("renders without error.", () => {
    const component = shallow(
      <FiltersButton
        setFilterSectionVisibility={() => {}}
        filtersCount={0}
        searchInputValue=""
      />
    );
    const button = findByTestAttr(component, "filtersButton");
    expect(button.length).toBe(1);
  });
});
