// SEARCH INPUT CLEAR FUNCTION

export const clearInput = () => ({ type: "CLEAR_INPUT" });

// SEARCH INPUT ON CHANGE HANDLE ACTION

export const searchInputChange = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "INPUT_CHANGE",
  searchInputValue: e.currentTarget.value,
});

// FILTER POKEMON BY SEARCHED NAME

export const searchPokemon = (pokemonName: string) => {
  return (dispatch, getState) => {
    const pokemonList = getState().pokemonList;
    const searchedPokemon = pokemonList.filter(
      ({ name }) => name === pokemonName
    );
    return dispatch({
      type: "SEARCH_POKEMON",
      filteredList: searchedPokemon,
    });
  };
};

// UPDATE OF AUTOCOMPLETE LIST

export const updateAutocompleteList = () => {
  return (dispatch, getState) => {
    const searchInputValue = getState().searchInputValue.toLowerCase();
    const pokemonList = getState().pokemonList.map(({ name }) => name);
    const autocompleteList = pokemonList.filter((pokemon) =>
      pokemon.includes(searchInputValue)
    );

    return dispatch({
      type: "UPDATE_AUTOCOMPLETE_LIST",
      autocompleteList: searchInputValue.length === 0 ? [] : autocompleteList,
    });
  };
};
