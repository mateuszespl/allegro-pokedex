import { connect } from "react-redux";

import { AutocompleteListItem } from "./AutocompleteListItem";
import { searchPokemon } from "store/actionsCreator";

const mapDispatchToProps = {
  searchPokemon,
};

export default connect(null, mapDispatchToProps)(AutocompleteListItem);
