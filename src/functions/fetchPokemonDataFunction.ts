export const fetchPokemonData = (
  searchValue: string,
  limit?: number,
  offset?: number
) =>
  fetch(
    `https://pokeapi.co/api/v2/pokemon/${searchValue}?limit=${limit}&offset=${offset}`,
    {
      method: "GET",
    }
  ).then((data) => data.json());
