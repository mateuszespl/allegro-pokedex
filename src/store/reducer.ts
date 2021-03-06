import * as actionTypes from "./actions";

const initialState = {
  searchInputValue: "",
  displayMode: "",
  allPokemons: [],
  pokemonList: [],
  currentPagePokemonList: [],
  isFilterSectionVisible: false,
  filteredPokemonList: [],
  autocompleteList: [],
  limit: 20,
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
        allPokemons: action.pokemonList,
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
    case actionTypes.LIMIT_CHANGE:
      return {
        ...state,
        limit: action.value,
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
    case actionTypes.FILTER_POKEMONS:
      return {
        ...state,
        pokemonList: action.pokemonList,
        currentPagePokemonList: action.pokemonList.splice(0, state.limit),
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
    case actionTypes.SET_FILTER_SECTION_VISIBILITY:
      return {
        ...state,
        isFilterSectionVisible: !state.isFilterSectionVisible,
      };
    default:
      return state;
  }
};
