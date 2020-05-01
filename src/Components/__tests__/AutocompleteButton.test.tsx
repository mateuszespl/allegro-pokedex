import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { AutocompleteButton } from "../AutocompleteButton/AutocompleteButton";

describe("AutocompleteButton", () => {
  it("renders without error.", () => {
    const component = shallow(
      <AutocompleteButton autocompleteItem="" searchPokemon={() => {}} />
    );
    const section = findByTestAttr(component, "autocompleteButton");
    expect(section.length).toBe(1);
  });
});
