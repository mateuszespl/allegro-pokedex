import { fetchPokemonData } from "../functions/fetchPokemonDataFunction";

// POKEMON LIST UPDATE (THUNK)

export const pokemonListUpdate = (data, searchValue) => ({
  type: "POKEMON_LIST_UPDATE",
  pokemonList:
    searchValue === ""
      ? [...data.results.map((result) => result.name)]
      : [data.name],
});

// FETCHING INITIAL API ACTION

export const fetchData = (
  searchValue: string,
  limit?: number,
  offset?: number
) => {
  return async (dispatch) => {
    const data = await fetchPokemonData(searchValue.toLowerCase(), 10, 0);
    localStorage.setItem(
      "Pokemons",
      JSON.stringify(data.results.map((result) => result.name))
    );
    return dispatch(pokemonListUpdate(data, searchValue));
  };
};

// FETCHING POKEMON INFO

export const fetchPokemonInfoData = (nameList) => {
  return (dispatch) => {
    nameList.forEach((name) =>
      fetchPokemonData(name.toLowerCase()).then((parsedData) => {
        return dispatch({
          type: "POKEMON_LIST_DATA_UPDATE",
          pokemonData: parsedData,
        });
      })
    );
  };
};
