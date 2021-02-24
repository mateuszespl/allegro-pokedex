import { fetchPokemonData } from "./../functions/fetchPokemonDataFunction";
// FILTER ITEMS ACTION

// export const filterPokemonList = (pokemonDataList, filters) => {
//   const filtersArray = filters.map((filter) => filter);
//   return (dispatch, getState) => {
//     const dispatchAction = (filteredList) =>
//       dispatch({
//         type: "POKEMON_FILTERED_LIST_DATA_UPDATE",
//         filteredList: filteredList,
//       });
//     const height = getState().heightValue;
//     const weight = getState().weightValue;
//     const type = getState().typeValue;
//     if (filtersArray.length === 3) {
//       const typeFilteredList = typeFilter(pokemonDataList, type);
//       const heightFilteredList = heightFilter(typeFilteredList, height);
//       const weightFilteredList = weightFilter(heightFilteredList, weight);
//       return dispatchAction(weightFilteredList);
//     } else if (
//       filtersArray.includes("Typ", "Waga") &&
//       filtersArray.length === 2
//     ) {
//       const typeFilteredList = typeFilter(pokemonDataList, type);
//       const weightFilteredList = weightFilter(typeFilteredList, weight);
//       return dispatchAction(weightFilteredList);
//     } else if (
//       filtersArray.includes("Typ", "Wzrost") &&
//       filtersArray.length === 2
//     ) {
//       const typeFilteredList = typeFilter(pokemonDataList, type);
//       const heightFilteredList = heightFilter(typeFilteredList, height);
//       return dispatchAction(heightFilteredList);
//     } else if (
//       filtersArray.includes("Waga", "Wzrost") &&
//       filtersArray.length === 2
//     ) {
//       const heightFilteredList = heightFilter(pokemonDataList, type);
//       const weightFilteredList = weightFilter(heightFilteredList, weight);
//       return dispatchAction(weightFilteredList);
//     } else if (filtersArray.includes("Typ") && filtersArray.length === 1) {
//       const filteredList = typeFilter(pokemonDataList, type);
//       return dispatchAction(filteredList);
//     } else if (filtersArray.includes("Wzrost") && filtersArray.length === 1) {
//       const filteredList = heightFilter(pokemonDataList, height);
//       console.log("siemano");
//       return dispatchAction(filteredList);
//     } else if (filtersArray.includes("Waga") && filtersArray.length === 1) {
//       const filteredList = weightFilter(pokemonDataList, weight);
//       return dispatchAction(filteredList);
//     }
//   };
// };

export const filterPokemons = (filters) => {
  const { type, weight, height } = filters;

  return async (dispatch) => {
    const endpoint = `${type && `/type/${type}/`}`;
    const apiResponse = await fetchPokemonData(endpoint, 2000);
    const pokemonList = apiResponse.pokemon;

    return dispatch({
      type: "FILTER_POKEMONS",
      pokemonList,
    });
  };
};

// UPDATE VISIBILITY OF FILTER SECTION

export const setFilterSectionVisibility = () => ({
  type: "SET_FILTER_SECTION_VISIBILITY",
});

// DISPLAY MODE UPDATE

export const displayModeUpdate = (mode) => ({
  type: "DISPLAY_MODE_UPDATE",
  mode: mode,
});
