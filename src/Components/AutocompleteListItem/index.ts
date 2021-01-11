import { connect } from "react-redux";

import { AutocompleteListItem } from "./AutocompleteListItem";
import { searchPokemon } from "store/actionsCreator";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  searchPokemon,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutocompleteListItem);
