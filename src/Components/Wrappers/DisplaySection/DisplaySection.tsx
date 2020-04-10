import React, { useEffect } from "react";
import styled from "styled-components";
import PokemonList from "../../PokemonList/PokemonList";
import PaginationSection from "../PaginationSection/PaginationSection";
import { fetchData } from "../../../store/actionsCreator";
import { connect } from "react-redux";

const StyledWrapper = styled.section`
  margin: 80px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.darkWhite};
  position: relative;
`;

export interface DisplaySectionInterface {
  limit: number;
  currentPage: number;
  fetchData: (searchValue: string, limit: number, currentPage: number) => any;
}

const DisplaySection: React.FC<DisplaySectionInterface> = ({
  limit,
  currentPage,
  fetchData,
}) => {
  useEffect(() => {
    fetchData("", limit, currentPage);
  }, [currentPage]);

  return (
    <StyledWrapper className="display">
      <PokemonList />
      <PaginationSection />
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
    fetchData: (searchValue, limit, currentPage) =>
      dispatch(fetchData(searchValue, limit, currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);
