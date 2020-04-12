import { fetchPokemonData } from "../functions/fetchPokemonDataFunction";

// SEARCH INPUT ON CHANGE HANDLE ACTION

export const searchInputChange = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "INPUT_CHANGE",
  searchInputValue: e.currentTarget.value,
});

// FETCHING INITIAL API ACTION

export const fetchData = (
  searchValue: string,
  limit: number,
  offset: number
) => {
  return (dispatch) => {
    fetchPokemonData(searchValue.toLowerCase(), limit, offset).then(
      (parsedData) =>
        dispatch({
          type: "POKEMON_LIST_UPDATE",
          pokemonList:
            searchValue === "" ? [...parsedData.results] : [parsedData],
        })
    );
  };
};

// SEARCH INPUT CLEAR FUNCTION

export const clearInput = () => ({ type: "CLEAR_INPUT" });

// UPDATE OF CURRENT / NEXT / PREVIOUS PAGE

export const updateCurrentPage = (updatedPage: number) => ({
  type: "UPDATE_CURRENT_PAGE",
  currentPage: updatedPage,
});

// UPDATE VISIBILITY OF FILTER SECTION

export const setFilterSectionVisibility = () => ({
  type: "SET_FILTER_SECTION_VISIBILITY",
});
