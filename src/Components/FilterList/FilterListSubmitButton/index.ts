import { connect } from "react-redux";

import { FilterListSubmitButton } from "./FilterListSubmitButton";
import {
  filterPokemonList,
  displayModeUpdate,
  clearFilters,
} from "actions/FilterListActions";

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
)(FilterListSubmitButton);
