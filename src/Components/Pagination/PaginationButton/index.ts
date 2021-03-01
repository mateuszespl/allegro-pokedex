import { connect } from "react-redux";

import { PaginationButton } from "./PaginationButton";
import { updateCurrentPage } from "actions/PaginationActions";

const mapStateToProps = (state) => {
  return {
    limit: state.limit,
    currentPagePokemonList: state.currentPagePokemonList,
  };
};

const mapDispatchToProps = {
  updateCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationButton);
