import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

import { StyledPaginationButton } from "./PaginationButton.styled";

interface PaginationButtonInterface {
  previous?: boolean;
  currentPage: number;
  updateCurrentPage: (
    currentPage: number,
    limit: number,
    previous?: boolean
  ) => any;
  limit: number;
}

export const PaginationButton: React.FC<PaginationButtonInterface> = ({
  previous,
  currentPage,
  updateCurrentPage,
  limit,
}) => {
  useEffect(() => {
    currentPage !== 1 && updateCurrentPage(0, limit, previous);
  }, [limit, updateCurrentPage]);

  return (
    <StyledPaginationButton
      className={`pagination__button ${previous ? "previous" : "next"}`}
      as={Link}
      to={`/${previous ? Number(currentPage) - 1 : Number(currentPage) + 1}`}
      onClick={() => updateCurrentPage(Number(currentPage), limit, previous)}
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
  );
};
