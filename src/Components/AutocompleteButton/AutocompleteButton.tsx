import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { searchPokemon } from "../../store/actionsCreator";

const StyledWrapper = styled.button`
  font-size: ${({ theme }) => theme.fonts.m};
  border: none;
  background: none;
  margin: 5px 0;
  text-align: left;
  padding: 5px;
  list-style: none;
  outline: none;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.green};
    border-radius: 5px;
    color: white;
  }
`;

export interface AutocompleteButtonInterface {
  autocompleteItem: string;
  searchPokemon: (searchedName: React.FormEvent<HTMLButtonElement>) => any;
}

export const AutocompleteButton: React.FC<AutocompleteButtonInterface> = ({
  autocompleteItem,
  searchPokemon,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    searchPokemon(e.target.value);
  };
  return (
    <StyledWrapper
      onClick={handleClick}
      value={autocompleteItem}
      className="autocompleteButton"
      data-test="autocompleteButton"
    >
      {autocompleteItem}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchPokemon: (searchedName) => dispatch(searchPokemon(searchedName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteButton);
