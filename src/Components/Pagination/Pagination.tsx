import React from "react";

import PaginationButton from "components/Pagination/PaginationButton";
import PaginationSelect from "components/Pagination/PaginationSelect";
import PaginationReturnButton from "components/Pagination/PaginationReturnButton";
import { StyledPagination } from "./Pagination.styled";

interface PaginationInterface {
  displayMode: string;
}

export const Pagination: React.FC<PaginationInterface> = ({ displayMode }) => {
  return (
    <StyledPagination>
      {displayMode !== "Filter" ? (
        <>
          <PaginationButton previous />
          <PaginationSelect />
          <PaginationButton />
        </>
      ) : (
        <PaginationReturnButton />
      )}
    </StyledPagination>
  );
};
