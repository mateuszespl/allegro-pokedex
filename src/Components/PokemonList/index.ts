import { connect } from "react-redux";

import { PokemonList } from "./PokemonList";
import { fetchData, fetchPokemonInfoData } from "actions/PokemonListActions";

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

const mapDispatchToProps = {
  fetchData,
  fetchPokemonInfoData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
