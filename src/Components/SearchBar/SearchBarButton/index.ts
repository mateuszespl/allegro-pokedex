import { connect } from "react-redux";

import { SearchBarButton } from "./SearchBarButton";
import { searchPokemon } from "actions/SearchBarActions";

const mapStateToProps = (state) => ({
  searchInputValue: state.searchInputValue,
});

const mapDispatchToProps = {
  searchPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarButton);
