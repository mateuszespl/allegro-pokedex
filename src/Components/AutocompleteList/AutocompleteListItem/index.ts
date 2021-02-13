import { connect } from "react-redux";

import { AutocompleteListItem } from "./AutocompleteListItem";
import { searchPokemon } from "actions/AutocompleteListActions";

const mapDispatchToProps = {
  searchPokemon,
};

export default connect(null, mapDispatchToProps)(AutocompleteListItem);
