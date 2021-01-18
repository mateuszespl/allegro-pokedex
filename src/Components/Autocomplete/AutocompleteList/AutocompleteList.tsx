import React from "react";

import AutocompleteListItem from "../AutocompleteListItem";
import { StyledAutocompleteList } from "./AutocompleteList.styled";

interface AutocompleteListInterface {
  autocompleteList: Array<any>;
}

export const AutocompleteList: React.FC<AutocompleteListInterface> = ({
  autocompleteList,
}) => {
  return (
    <StyledAutocompleteList
      autocompleteList={autocompleteList}
      className="autocompleteList"
      data-test="autocompleteList"
    >
      {autocompleteList.map((autocompleteItem) => (
        <AutocompleteListItem autocompleteItem={autocompleteItem} />
      ))}
    </StyledAutocompleteList>
  );
};
