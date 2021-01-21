import React from "react";

import { StyledPaginationReturnButton } from "./PaginationReturnButton.styled";

export const PaginationReturnButton = ({ returnButtonClick }) => {
  return (
    <StyledPaginationReturnButton href="#main" onClick={returnButtonClick}>
      Powrót
    </StyledPaginationReturnButton>
  );
};
