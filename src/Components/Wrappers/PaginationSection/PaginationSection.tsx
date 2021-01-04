import React from "react";
import PaginationButton from "../../PaginationButton";
import PaginationSelect from "../../PaginationSelect";
import PaginationReturnButton from "../../PaginationReturnButton";
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
