// HANDLE LIMIT VALUE CHANGE

export const setLimitValue = (e: React.FormEvent<HTMLSelectElement>) => ({
  type: "LIMIT_CHANGE",
  value: Number(e.currentTarget.value),
});

// HANDLE RETURN BUTTON CLICK

export const returnButtonClick = () => ({
  type: "RETURN_BUTTON_CLICK",
});

// UPDATE OF CURRENT / NEXT / PREVIOUS PAGE

export const updateCurrentPage = (
  currentPage: number,
  limit: number,
  previous?: boolean
) => {
  const rangeA = previous ? (currentPage - 2) * limit : currentPage * limit;
  const rangeB = previous
    ? (currentPage - 1) * limit
    : (currentPage + 1) * limit;

  return (dispatch, getState) => {
    const pokemonList = getState().pokemonList;
    const currentPagePokemonList = pokemonList.slice(rangeA, rangeB);
    return dispatch({
      type: "UPDATE_CURRENT_POKEMON_LIST",
      currentPagePokemonList,
    });
  };
};
