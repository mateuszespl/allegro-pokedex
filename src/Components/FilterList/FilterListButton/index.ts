import { connect } from "react-redux";

import { FilterListButton } from "./FilterListButton";
import { setFilterSectionVisibility } from "store/actionsCreator";

const mapStateToProps = (state) => {
  return {
    searchInputValue: state.searchInputValue,
    filtersCount: state.currentFilters.length,
  };
};

const mapDispatchToProps = {
  setFilterSectionVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterListButton);
