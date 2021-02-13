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

// UPDATE OF AUTOCOMPLETE LIST

export const updateAutocompleteList = () => {
  return (dispatch, getState) => {
    const searchInputValue = getState().searchInputValue.toLowerCase();
    if (searchInputValue.length === 0) {
      return dispatch({
        type: "UPDATE_AUTOCOMPLETE_LIST",
        autocompleteList: [],
      });
    } else {
      const pokemonList = getState().pokemonList;
      const autocompleteList = pokemonList.filter((pokemon) =>
        pokemon.includes(searchInputValue)
      );
      console.log(searchInputValue, pokemonList);
      console.log(autocompleteList);

      return dispatch({
        type: "UPDATE_AUTOCOMPLETE_LIST",
        autocompleteList: autocompleteList,
      });
    }
  };
};
