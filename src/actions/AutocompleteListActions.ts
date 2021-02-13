// FILTER POKEMON BY SEARCHED NAME

export const searchPokemon = (pokemonName: string) => {
  return (dispatch, getState) => {
    const pokemonDataList = getState().pokemonDataList;
    const searchedPokemon = pokemonDataList.filter(
      (pokemon) => pokemon.name === pokemonName
    );
    return dispatch({
      type: "SEARCH_POKEMON",
      filteredList: searchedPokemon,
    });
  };
};
