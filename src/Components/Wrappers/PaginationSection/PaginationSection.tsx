import React from "react";

import PaginationButton from "components/Pagination/PaginationButton";
import PaginationSelect from "components/Pagination/PaginationSelect";
import PaginationReturnButton from "components/Pagination/PaginationReturnButton";
import { StyledPaginationSection } from "./PaginationSection.styled";

interface PaginationSectionInterface {
  displayMode: string;
}

export const PaginationSection: React.FC<PaginationSectionInterface> = ({
  displayMode,
}) => {
  return (
    <StyledPaginationSection className="pagination" data-test="pagination">
      {displayMode !== "Filter" ? (
        <>
          <PaginationButton previous />
          <PaginationSelect />
          <PaginationButton />
        </>
      ) : (
        <PaginationReturnButton />
      )}
    </StyledPaginationSection>
  );
};
