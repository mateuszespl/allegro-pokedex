import { fetchPokemonData } from "../functions/fetchPokemonDataFunction";

// SEARCH INPUT ON CHANGE HANDLE ACTION

export const searchInputChange = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "INPUT_CHANGE",
  searchInputValue: e.currentTarget.value,
});

// POKEMON LIST UPDATE (THUNK)

export const pokemonListUpdate = (data, searchValue) => ({
  type: "POKEMON_LIST_UPDATE",
  pokemonList:
    searchValue === ""
      ? [...data.results.map((result) => result.name)]
      : [data.name],
});

// FETCHING INITIAL API ACTION

export const fetchData = (
  searchValue: string,
  limit: number,
  offset: number
) => {
  return async (dispatch) => {
    const data = await fetchPokemonData(
      searchValue.toLowerCase(),
      limit,
      offset
    );
    localStorage.setItem(
      "Pokemons",
      JSON.stringify(data.results.map((result) => result.name))
    );
    return dispatch(pokemonListUpdate(data, searchValue));
  };
};

// SEARCH INPUT CLEAR FUNCTION

export const clearInput = () => ({ type: "CLEAR_INPUT" });

// UPDATE OF CURRENT / NEXT / PREVIOUS PAGE

export const updateCurrentPage = (updatedPage: number) => ({
  type: "UPDATE_CURRENT_PAGE",
  currentPage: updatedPage,
});

// UPDATE VISIBILITY OF FILTER SECTION

export const setFilterSectionVisibility = () => ({
  type: "SET_FILTER_SECTION_VISIBILITY",
});

// HANDLE WEIGHT VALUE CHANGE

export const setWeightValue = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "WEIGHT_CHANGE",
  value: e.currentTarget.value,
});

// HANDLE HEIGHT VALUE CHANGE

export const setHeightValue = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "HEIGHT_CHANGE",
  value: e.currentTarget.value,
});

// HANDLE TYPE VALUE CHANGE

export const setTypeValue = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "TYPE_CHANGE",
  value: e.currentTarget.value,
});

// HANDLE LIMIT VALUE CHANGE

export const setLimitValue = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "LIMIT_CHANGE",
  value: e.currentTarget.value,
});

// FETCHING POKEMON INFO

export const fetchPokemonInfoData = (nameList) => {
  return (dispatch) => {
    nameList.forEach((name) =>
      fetchPokemonData(name.toLowerCase()).then((parsedData) => {
        return dispatch({
          type: "POKEMON_LIST_DATA_UPDATE",
          pokemonData: parsedData,
        });
      })
    );
  };
};
