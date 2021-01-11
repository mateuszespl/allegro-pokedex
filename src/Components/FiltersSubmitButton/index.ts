import { connect } from "react-redux";

import { FiltersSubmitButton } from "./FiltersSubmitButton";
import {
  filterPokemonList,
  displayModeUpdate,
  clearFilters,
} from "store/actionsCreator";

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
    currentFilters: state.currentFilters,
    pokemonDataList: state.pokemonDataList,
  };
};

const mapDispatchToProps = {
  filterPokemonList,
  displayModeUpdate,
  clearFilters,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersSubmitButton);
