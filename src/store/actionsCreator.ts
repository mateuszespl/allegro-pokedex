import {
  heightFilter,
  weightFilter,
  typeFilter,
} from "./../functions/filterFunctions";
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
  limit?: number,
  offset?: number
) => {
  return async (dispatch) => {
    const data = await fetchPokemonData(searchValue.toLowerCase(), 30, 0);
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

export const updateCurrentPage = (
  currentPage: number,
  updatedPage: number,
  limit: number
) => {
  const currentRange = currentPage * limit;
  const updatedRange = updatedPage * limit;
  return (dispatch, getState) => {
    const pokemonDataList = getState().pokemonDataList;
    const updatedPokemonDataList = pokemonDataList.slice(
      currentRange,
      updatedRange
    );
    return dispatch({
      type: "UPDATE_CURRENT_PAGE",
      updatedPage: updatedPage,
      updatedPagePokemonDataList: updatedPokemonDataList,
    });
  };
  // type: "UPDATE_CURRENT_PAGE",
  // currentPage: updatedPage,
};

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

export const setLimitValue = (e: React.FormEvent<HTMLSelectElement>) => ({
  type: "LIMIT_CHANGE",
  value: Number(e.currentTarget.value),
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

// HANDLE CURRENT FILTERS UPDATE

export const setCurrentFilters = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "FILTERS_CHANGE",
  filter: e.currentTarget.value,
});

// FILTER ITEMS ACTION

export const filterPokemonList = (pokemonDataList, filters) => {
  const filtersArray = filters.map((filter) => filter);
  return (dispatch, getState) => {
    const dispatchAction = (filteredList) =>
      dispatch({
        type: "POKEMON_FILTERED_LIST_DATA_UPDATE",
        filteredList: filteredList,
      });
    const height = getState().heightValue;
    const weight = getState().weightValue;
    const type = getState().typeValue;
    if (filtersArray.length === 3) {
      const typeFilteredList = typeFilter(pokemonDataList, type);
      const heightFilteredList = heightFilter(typeFilteredList, height);
      const weightFilteredList = weightFilter(heightFilteredList, weight);
      return dispatchAction(weightFilteredList);
    } else if (
      filtersArray.includes("Typ", "Waga") &&
      filtersArray.length === 2
    ) {
      const typeFilteredList = typeFilter(pokemonDataList, type);
      const weightFilteredList = weightFilter(typeFilteredList, weight);
      return dispatchAction(weightFilteredList);
    } else if (
      filtersArray.includes("Typ", "Wzrost") &&
      filtersArray.length === 2
    ) {
      const typeFilteredList = typeFilter(pokemonDataList, type);
      const heightFilteredList = heightFilter(typeFilteredList, height);
      return dispatchAction(heightFilteredList);
    } else if (
      filtersArray.includes("Waga", "Wzrost") &&
      filtersArray.length === 2
    ) {
      const heightFilteredList = heightFilter(pokemonDataList, type);
      const weightFilteredList = weightFilter(heightFilteredList, weight);
      return dispatchAction(weightFilteredList);
    } else if (filtersArray.includes("Typ") && filtersArray.length === 1) {
      const filteredList = typeFilter(pokemonDataList, type);
      return dispatchAction(filteredList);
    } else if (filtersArray.includes("Wzrost") && filtersArray.length === 1) {
      const filteredList = heightFilter(pokemonDataList, height);
      console.log("siemano");
      return dispatchAction(filteredList);
    } else if (filtersArray.includes("Waga") && filtersArray.length === 1) {
      const filteredList = weightFilter(pokemonDataList, weight);
      return dispatchAction(filteredList);
    }
  };
};

// DISPLAY MODE UPDATE

export const displayModeUpdate = (mode) => ({
  type: "DISPLAY_MODE_UPDATE",
  mode: mode,
});

// CLEAR FILTERS ACTION

export const clearFilters = () => ({ type: "CLEAR_FILTERS" });

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

// HANDLE RETURN BUTTON CLICK

export const returnButtonClick = () => ({
  type: "RETURN_BUTTON_CLICK",
});
