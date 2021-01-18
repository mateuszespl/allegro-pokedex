import React from "react";

import AutocompleteList from "components/Autocomplete/AutocompleteList";
import { StyledAutocomplete } from "./Autocomplete.styled";

interface AutocompleteInterface {
  autocompleteList: any[];
}

export const Autocomplete: React.FC<AutocompleteInterface> = ({
  autocompleteList,
}) => {
  return (
    <StyledAutocomplete>
      <AutocompleteList autocompleteList={autocompleteList} />
    </StyledAutocomplete>
  );
};
