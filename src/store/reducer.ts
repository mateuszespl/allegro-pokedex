import * as actionTypes from "./actions";

const initialState = {
  searchInputValue: "",
  pokemonList: [],
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
    default:
      return state;
  }
};
