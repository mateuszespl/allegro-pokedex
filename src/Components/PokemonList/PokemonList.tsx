import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Pokemon from "../Pokemon/Pokemon";
import { fetchData, fetchPokemonInfoData } from "./../../store/actionsCreator";

const StyledWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export interface PokemonListInterface {
  pokemonList: Array<any>;
  limit: number;
  currentPage: number;
  fetchData: (searchValue: string, limit: number, currentPage: number) => any;
  fetchPokemonInfoData: (pokemonList: any) => any;
  pokemonDataList: Array<any>;
  filteredPokemonDataList: Array<any>;
  displayMode: string;
  currentPagePokemonDataList: Array<any>;
}

const PokemonList: React.FC<PokemonListInterface> = ({
  pokemonList,
  limit,
  currentPage,
  fetchData,
  fetchPokemonInfoData,
  pokemonDataList,
  displayMode,
  filteredPokemonDataList,
  currentPagePokemonDataList,
}) => {
  useEffect(() => {
    fetchData("", limit, currentPage);
    fetchPokemonInfoData(pokemonList);
  }, [pokemonList.length]);

  return (
    <StyledWrapper className="display__list">
      {(displayMode === "Filter"
        ? filteredPokemonDataList
        : currentPagePokemonDataList
      ).map((pokemonData, id) => (
        <Pokemon key={id} pokemonData={pokemonData} />
      ))}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
    currentPage: state.currentPage,
    limit: state.limit,
    pokemonList: state.pokemonList,
    pokemonDataList: state.pokemonDataList,
    filteredPokemonDataList: state.filteredPokemonDataList,
    currentPagePokemonDataList: state.currentPagePokemonDataList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (searchValue, limit, currentPage) =>
      dispatch(fetchData(searchValue, limit, currentPage)),
    fetchPokemonInfoData: (pokemonList) =>
      dispatch(fetchPokemonInfoData(pokemonList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
