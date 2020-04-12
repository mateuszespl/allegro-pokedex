import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateCurrentPage } from "../../store/actionsCreator";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const StyledWrapper = styled.a<{ previous: boolean }>`
  padding: ${({ previous }) =>
    previous ? "10px 20px 10px 50px" : "10px 50px 10px 20px"};
  margin: 0 10px;
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
`;

export interface PaginationButtonInterface {
  previous?: boolean;
  currentPage: number;
  updateCurrentPage: (updatedPage: number) => any;
  limit: number;
}

const PaginationButton: React.FC<PaginationButtonInterface> = ({
  previous,
  currentPage,
  updateCurrentPage,
  limit,
}) => {
  const handleClick = () => {
    const updatedPage = previous ? currentPage - 20 : currentPage + 20;
    updateCurrentPage(updatedPage);
  };

  return (
    <StyledWrapper
      href="#main"
      className={`pagination__button ${previous ? "previous" : "next"}`}
      onClick={handleClick}
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
    updateCurrentPage: (updatedPage) =>
      dispatch(updateCurrentPage(updatedPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationButton);
