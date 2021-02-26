import { fetchPokemonData } from "./../functions/fetchPokemonDataFunction";

export const filterPokemons = (pokemonType: string) => {
  return async (dispatch) => {
    const endpoint = `${pokemonType && `/type/${pokemonType}/`}`;
    const apiResponse = await fetchPokemonData(endpoint, 2000);
    const pokemonList = apiResponse.pokemon.map((res) => res.pokemon);

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
