import { fetchPokemonData } from "../functions/fetchPokemonDataFunction";

// FETCHING INITIAL API ACTION

export const appInit = () => {
  return async (dispatch) => {
    const apiResponse = await fetchPokemonData("/pokemon/", 2000);
    const pokemonList = apiResponse.results;
    return dispatch({ type: "POKEMON_LIST_UPDATE", pokemonList });
  };
};
