import React from "react";

export const PaginationReturnButton = ({ returnButtonClick }) => {
  return (
    <StyledPaginationReturnButton href="#main" onClick={returnButtonClick}>
      Powrót
    </StyledPaginationReturnButton>
  );
};
