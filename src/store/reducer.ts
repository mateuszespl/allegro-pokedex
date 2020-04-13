import * as actionTypes from "./actions";
import { compare } from "../functions/compareFunction";

const initialState = {
  searchInputValue: "",
  pokemonList: [],
  pokemonDataList: [],
  filteredPokemonList: [],
  currentPage: 0,
  limit: 20,
  filterSectionVisible: false,
  weightValue: 0,
  heightValue: 0,
  typeValue: "",
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
    case actionTypes.WEIGHT_CHANGE:
      return {
        ...state,
        weightValue: action.value,
      };
    case actionTypes.HEIGHT_CHANGE:
      return {
        ...state,
        heightValue: action.value,
      };
    case actionTypes.TYPE_CHANGE:
      return {
        ...state,
        typeValue: action.value,
      };
    case actionTypes.LIMIT_CHANGE:
      return {
        ...state,
        limit: action.value,
      };
    case actionTypes.POKEMON_LIST_DATA_UPDATE:
      return {
        ...state,
        pokemonDataList: [...state.pokemonDataList, action.pokemonData].sort(
          compare
        ),
      };
    default:
      return state;
  }
};
