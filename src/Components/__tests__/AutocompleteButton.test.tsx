import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { AutocompleteButton } from "../AutocompleteButton/AutocompleteButton";

describe("<AutocompleteButton/>", () => {
  it("renders without error.", () => {
    const component = shallow(
      <AutocompleteButton autocompleteItem="" searchPokemon={() => {}} />
    );
    const ul = findByTestAttr(component, "autocompleteButton");
    expect(ul.length).toBe(1);
  });
});
