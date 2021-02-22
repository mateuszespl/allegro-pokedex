// SEARCH INPUT CLEAR FUNCTION

export const clearInput = () => ({ type: "CLEAR_INPUT" });

// SEARCH INPUT ON CHANGE HANDLE ACTION

export const searchInputChange = (e: React.FormEvent<HTMLInputElement>) => {
  return (dispatch, getState) => {
    const searchInputValue = getState().searchInputValue.toLowerCase();
    const pokemonList = getState().pokemonList.map(({ name }) => name);
    const autocompleteList = pokemonList.filter((pokemon) =>
      pokemon.includes(searchInputValue)
    );

    return dispatch({
      type: "INPUT_CHANGE",
      searchInputValue: e.currentTarget.value,
      autocompleteList: searchInputValue.length === 0 ? [] : autocompleteList,
    });
  };
};

// FILTER POKEMON BY SEARCHED NAME

export const searchPokemon = (
  pokemonName: string,
  isCalledAsAutocomplete?: boolean
) => {
  return (dispatch, getState) => {
    const pokemonList = getState().pokemonList;
    const searchedPokemon = pokemonList.filter(({ name }) =>
      isCalledAsAutocomplete ? name === pokemonName : name.includes(pokemonName)
    );
    return dispatch({
      type: "SEARCH_POKEMON",
      filteredList: searchedPokemon,
    });
  };
};
