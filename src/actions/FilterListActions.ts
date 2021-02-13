import {
  heightFilter,
  weightFilter,
  typeFilter,
} from "./../functions/filterFunctions";

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

// CLEAR FILTERS ACTION

export const clearFilters = () => ({ type: "CLEAR_FILTERS" });

// DISPLAY MODE UPDATE

export const displayModeUpdate = (mode) => ({
  type: "DISPLAY_MODE_UPDATE",
  mode: mode,
});
