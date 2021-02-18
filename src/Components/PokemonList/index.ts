import { connect } from "react-redux";

import { PokemonList } from "./PokemonList";
import { appInit } from "actions/PokemonListActions";

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
    pokemonList: state.pokemonList,
    filteredPokemonList: state.filteredPokemonList,
    currentPagePokemonList: state.currentPagePokemonList,
  };
};

const mapDispatchToProps = {
  appInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
