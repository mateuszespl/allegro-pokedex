import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateCurrentPage } from "../../store/actionsCreator";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const StyledWrapper = styled.a<{ previous: boolean }>`
  padding: ${({ previous }) =>
    previous ? "10px 20px 10px 50px" : "10px 50px 10px 20px"};
  margin: 0 10px;
  width: 200px;
  height: 40px;
  white-space: nowrap;
  text-align: center;
  border: none;
  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fonts.m};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  font-weight: 800;
  position: relative;
  outline: none;
  text-decoration: none;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    left: ${({ previous }) => (previous ? "-5px" : "unset")};
    right: ${({ previous }) => (!previous ? "-5px" : "unset")};
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fonts.s};
  }

  ${({ theme }) => theme.media.largeMobile} {
    width: 120px;
    padding: 5px 10px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: none;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    width: 110px;
    height: 30px;
    margin: 0 5px;
  }
`;

export interface PaginationButtonInterface {
  previous?: boolean;
  currentPage: number;
  updateCurrentPage: (
    currentPage: number,
    updatedPage: number,
    limit: number
  ) => any;
  limit: number;
}

const PaginationButton: React.FC<PaginationButtonInterface> = ({
  previous,
  currentPage,
  updateCurrentPage,
  limit,
}) => {
  const handleClick = (previous) => {
    if (previous) {
      const previousCurrentPage = currentPage - 2;
      const updatedPage = currentPage - 1;
      updateCurrentPage(previousCurrentPage, updatedPage, limit);
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
      {/* {limit !== 1000 && ( */}
      <StyledWrapper
        href="#main"
        className={`pagination__button ${previous ? "previous" : "next"}`}
        onClick={() => handleClick(previous)}
        previous={previous}
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
      </StyledWrapper>
      {/* )} */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    limit: state.limit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentPage: (currentPage, updatedPage, limit) =>
      dispatch(updateCurrentPage(currentPage, updatedPage, limit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationButton);
