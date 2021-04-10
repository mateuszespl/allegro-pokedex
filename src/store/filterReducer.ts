import * as actionTypes from "./actions";

const initialState = {
  filteredPokemonDataList: [],
  currentFilters: [],
  weightValue: 0,
  heightValue: 0,
  filterSectionVisible: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        searchInputValue: action.searchInputValue,
      };
    case actionTypes.CLEAR_INPUT:
      return {
        ...state,
        searchInputValue: "",
      };
    case actionTypes.SEARCH_POKEMON:
      return {
        ...state,
        filteredPokemonDataList: action.filteredList,
        displayMode: "Filter",
        searchInputValue: "",
        autocompleteList: [],
      };
    default:
      return state;
  }
};
