import * as actionTypes from "./actions";

const initialState = {
  searchInputValue: "",
  pokemonList: [],
  currentPage: 0,
  limit: 20,
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
        nextPage: action.nextPage,
        previousPage: action.previousPage,
        currentPAge: action.currentPage,
      };
    case actionTypes.CLEAR_INPUT:
      return {
        ...state,
        searchInputValue: "",
      };
    case actionTypes.UPDATE_CURRENT_PAGE:
      return {
        ...state,
        nextPage: action.nextPage,
        currentPage: action.currentPage,
        previousPage: action.previousPage,
      };
    default:
      return state;
  }
};
