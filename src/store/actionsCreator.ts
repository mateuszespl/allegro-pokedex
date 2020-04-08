export const searchInputChange = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "INPUT_CHANGE",
  searchInputValue: e.currentTarget.value,
});

export const fetchData = (searchInputValue) => {
  return (dispatch) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInputValue}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((parsedData) =>
        dispatch({
          type: "POKEMON_LIST_UPDATE",
          pokemonList: [...parsedData.results],
        })
      );
  };
};
