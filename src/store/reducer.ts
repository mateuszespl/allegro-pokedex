import * as actionTypes from "./actions";
import { compare } from "../functions/compareFunction";

const initialState = {
  searchInputValue: "",
  displayMode: "",
  typeValue: "",
  pokemonList: [],
  pokemonDataList: [],
  currentPagePokemonList: [],
  filteredPokemonList: [],
  currentFilters: [],
  autocompleteList: [],
  currentPage: 1,
  limit: 20,
  weightValue: 0,
  heightValue: 0,
  filterSectionVisible: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        searchInputValue: action.searchInputValue,
        autocompleteList: action.autocompleteList.slice(0, 10),
      };
    case actionTypes.POKEMON_LIST_UPDATE:
      return {
        ...state,
        pokemonList: action.pokemonList,
        currentPagePokemonList: action.pokemonList.slice(0, 20),
      };
    case actionTypes.CLEAR_INPUT:
      return {
        ...state,
        searchInputValue: "",
      };
    case actionTypes.UPDATE_CURRENT_POKEMON_LIST:
      return {
        ...state,
        currentPagePokemonList: action.currentPagePokemonList,
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
    case actionTypes.FILTERS_CHANGE:
      return {
        ...state,
        currentFilters: [...state.currentFilters, action.filter].sort(),
      };
    case actionTypes.POKEMON_LIST_DATA_UPDATE:
      return {
        ...state,
        pokemonDataList: [...state.pokemonDataList, action.pokemonData].sort(
          compare
        ),
        currentPagePokemonDataList: state.pokemonDataList.slice(0, 20),
      };
    case actionTypes.POKEMON_FILTERED_LIST_DATA_UPDATE:
      return {
        ...state,
        filteredPokemonList: action.filteredList,
      };
    case actionTypes.DISPLAY_MODE_UPDATE:
      return {
        ...state,
        displayMode: action.mode,
      };
    case actionTypes.CLEAR_FILTERS:
      return {
        ...state,
        currentFilters: [],
      };
    case actionTypes.UPDATE_AUTOCOMPLETE_LIST:
      return {
        ...state,
        autocompleteList: action.autocompleteList.slice(0, 10),
      };
    case actionTypes.SEARCH_POKEMON:
      return {
        ...state,
        filteredPokemonList: action.filteredList,
        displayMode: "Filter",
        searchInputValue: "",
        autocompleteList: [],
      };
    case actionTypes.RETURN_BUTTON_CLICK:
      return {
        ...state,
        displayMode: "Unset",
        filteredPokemonDataList: [],
        currentFilters: [],
        filterSectionVisible: false,
      };
    default:
      return state;
  }
};
