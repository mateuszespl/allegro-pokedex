import React, { useEffect } from "react";

import Pokemon from "../Pokemon";
import { StyledPokemonList } from "./PokemonList.styled";

interface PokemonListInterface {
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

export const PokemonList: React.FC<PokemonListInterface> = ({
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
    <StyledPokemonList className="display__list">
      {(displayMode === "Filter"
        ? filteredPokemonDataList
        : currentPagePokemonDataList
      ).map((pokemonData, id) => (
        <Pokemon key={id} pokemonData={pokemonData} />
      ))}
    </StyledPokemonList>
  );
};
