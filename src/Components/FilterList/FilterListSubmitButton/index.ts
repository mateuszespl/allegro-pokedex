import { connect } from "react-redux";

import { FilterListSubmitButton } from "./FilterListSubmitButton";
import { displayModeUpdate, filterPokemons } from "actions/FilterListActions";

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
    currentFilters: state.currentFilters,
    pokemonDataList: state.pokemonDataList,
  };
};

const mapDispatchToProps = {
  displayModeUpdate,
  filterPokemons,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterListSubmitButton);
