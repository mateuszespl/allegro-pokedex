import React, { useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { StyledPaginationButton } from "./PaginationButton.styled";

interface PaginationButtonInterface {
  previous?: boolean;
  currentPage: number;
  updateCurrentPage: (
    currentPage: number,
    updatedPage: number,
    limit: number
  ) => any;
  limit: number;
}

export const PaginationButton: React.FC<PaginationButtonInterface> = ({
  previous,
  currentPage,
  updateCurrentPage,
  limit,
}) => {
  const handleClick = (previous) => {
    if (previous) {
      if (currentPage !== 1) {
        const previousCurrentPage = currentPage - 2;
        const updatedPage = currentPage - 1;
        updateCurrentPage(previousCurrentPage, updatedPage, limit);
      }
    } else {
      const updatedPage = currentPage + 1;
      updateCurrentPage(currentPage, updatedPage, limit);
    }
  };

  useEffect(() => {
    updateCurrentPage(0, 1, limit);
  }, [limit]);

  return (
    <>
      <StyledPaginationButton
        href="#main"
        className={`pagination__button ${previous ? "previous" : "next"}`}
        onClick={() => handleClick(previous)}
        previous={previous}
        disabled={currentPage === 1}
      >
        {previous ? (
          <>
            <FaArrowCircleLeft />
            Poprzednie {limit}
          </>
        ) : (
          <>
            Następne {limit}
            <FaArrowCircleRight />
          </>
        )}
      </StyledPaginationButton>
    </>
  );
};
