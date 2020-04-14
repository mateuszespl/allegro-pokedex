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
  padding: 40px;
`;

export interface PokemonListInterface {
  pokemonList: Array<any>;
  limit: number;
  currentPage: number;
  fetchData: (searchValue: string, limit: number, currentPage: number) => any;
  fetchPokemonInfoData: (pokemonList: any) => any;
  pokemonDataList: Array<any>;
  filteredPokemonDataList: Array<any>;
}

const PokemonList: React.FC<PokemonListInterface> = ({
  pokemonList,
  limit,
  currentPage,
  fetchData,
  fetchPokemonInfoData,
  pokemonDataList,
  filteredPokemonDataList,
}) => {
  useEffect(() => {
    fetchData("", limit, currentPage);
    fetchPokemonInfoData(pokemonList);
  }, [pokemonList.length, currentPage, limit]);

  return (
    <StyledWrapper className="display__list">
      {(filteredPokemonDataList.length > 0
        ? filteredPokemonDataList
        : pokemonDataList
      ).map((pokemonData, id) => (
        <Pokemon key={id} pokemonData={pokemonData} />
      ))}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    limit: state.limit,
    pokemonList: state.pokemonList,
    pokemonDataList: state.pokemonDataList,
    filteredPokemonDataList: state.filteredPokemonDataList,
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
