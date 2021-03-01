import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

import { StyledPaginationButton } from "./PaginationButton.styled";

type Pokemon = { name: string; url: string };

interface PaginationButtonInterface {
  previous?: boolean;
  currentPagePokemonList: Pokemon[];
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
  currentPagePokemonList,
  limit,
}) => {
  useEffect(() => {
    currentPage !== 1 && updateCurrentPage(0, limit, previous);
  }, [limit, updateCurrentPage]);

  const handleClick = (e) => {
    if (currentPage === 1 && previous) {
      e.preventDefault();
      alert("cant");
    } else if (currentPagePokemonList.length < limit && !previous) {
      e.preventDefault();
      alert("cant");
    } else {
      updateCurrentPage(Number(currentPage), limit, previous);
    }
  };

  return (
    <StyledPaginationButton
      className={`pagination__button ${previous ? "previous" : "next"}`}
      as={Link}
      to={`/${previous ? Number(currentPage) - 1 : Number(currentPage) + 1}`}
      onClick={handleClick}
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
