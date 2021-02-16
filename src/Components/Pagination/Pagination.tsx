import React from "react";

import PaginationButton from "components/Pagination/PaginationButton";
import PaginationSelect from "components/Pagination/PaginationSelect";
import PaginationReturnButton from "components/Pagination/PaginationReturnButton";
import { StyledPagination } from "./Pagination.styled";

interface PaginationInterface {
  displayMode: string;
  currentPage: number;
}

export const Pagination: React.FC<PaginationInterface> = ({
  displayMode,
  currentPage,
}) => {
  return (
    <StyledPagination>
      {displayMode !== "Filter" ? (
        <>
          <PaginationButton previous currentPage={currentPage} />
          <PaginationSelect />
          <PaginationButton currentPage={currentPage} />
        </>
      ) : (
        <PaginationReturnButton />
      )}
    </StyledPagination>
  );
};
