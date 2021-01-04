import { connect } from "react-redux";

import { PokemonList } from "./PokemonList";
import { fetchData, fetchPokemonInfoData } from "./../../store/actionsCreator";

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
    currentPage: state.currentPage,
    limit: state.limit,
    pokemonList: state.pokemonList,
    pokemonDataList: state.pokemonDataList,
    filteredPokemonDataList: state.filteredPokemonDataList,
    currentPagePokemonDataList: state.currentPagePokemonDataList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (searchValue, limit, currentPage) =>
      dispatch(fetchData(searchValue, limit, currentPage)),
    fetchPokemonInfoData: (pokemonList) =>
      dispatch(fetchPokemonInfoData(pokemonList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
