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
  updatedPage: number,
  limit: number
) => {
  const currentRange = currentPage * limit;
  const updatedRange = updatedPage * limit;
  return (dispatch, getState) => {
    const pokemonDataList = getState().pokemonDataList;
    const updatedPokemonDataList = pokemonDataList.slice(
      currentRange,
      updatedRange
    );
    return dispatch({
      type: "UPDATE_CURRENT_PAGE",
      updatedPage: updatedPage,
      updatedPagePokemonDataList: updatedPokemonDataList,
    });
  };
  // type: "UPDATE_CURRENT_PAGE",
  // currentPage: updatedPage,
};
