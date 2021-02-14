import React, { useEffect } from "react";

import PokemonListItem from "./PokemonListItem";
import { StyledPokemonList } from "./PokemonList.styled";

interface PokemonApiReponse {
  name: string;
  url: string;
}

interface PokemonListInterface {
  pokemonList: PokemonApiReponse[];
  appInit: () => void;
  filteredPokemonList: PokemonApiReponse[];
  displayMode: string;
  currentPagePokemonList: PokemonApiReponse[];
}

export const PokemonList: React.FC<PokemonListInterface> = ({
  pokemonList,
  appInit,
  displayMode,
  filteredPokemonList,
  currentPagePokemonList,
}) => {
  useEffect(() => {
    pokemonList.length === 0 && appInit();
  }, [pokemonList.length, appInit]);

  return (
    <StyledPokemonList className="display__list">
      {(displayMode === "Filter"
        ? filteredPokemonList
        : currentPagePokemonList
      ).map(({ name: pokemonName, url: pokemonDataUrl }, id) => (
        <PokemonListItem key={id} name={pokemonName} url={pokemonDataUrl} />
      ))}
    </StyledPokemonList>
  );
};
