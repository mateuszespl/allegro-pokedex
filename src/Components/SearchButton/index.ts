import { connect } from "react-redux";

import { SearchButton } from "./SearchButton";
import { searchPokemon } from "../../store/actionsCreator";

const mapStateToProps = (state) => ({
  searchInputValue: state.searchInputValue,
});

const mapDispatchToProps = {
  searchPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
