import * as actionTypes from "./actions";

const initialState = {
  searchInputValue: "",
  pokemonList: [],
  currentPage: 0,
  limit: 20,
  filterSectionVisible: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        searchInputValue: action.searchInputValue,
      };
    case actionTypes.POKEMON_LIST_UPDATE:
      return {
        ...state,
        pokemonList: action.pokemonList,
      };
    case actionTypes.CLEAR_INPUT:
      return {
        ...state,
        searchInputValue: "",
      };
    case actionTypes.UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case actionTypes.SET_FILTER_SECTION_VISIBILITY:
      return {
        ...state,
        filterSectionVisible: !state.filterSectionVisible,
      };
    default:
      return state;
  }
};
