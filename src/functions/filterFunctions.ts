export const heightFilter = (pokemonDataList, height) =>
  pokemonDataList.filter((pokemon) => pokemon.height / 10 < height);

export const weightFilter = (pokemonDataList, weight) =>
  pokemonDataList.filter((pokemon) => pokemon.weight / 10 < weight);

export const typeFilter = (pokemonDataList, type) =>
  pokemonDataList.filter((pokemon) =>
    pokemon.types.map((type) => type.type.name).includes(type)
  );
