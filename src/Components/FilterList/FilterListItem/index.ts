import { connect } from "react-redux";

import { setCurrentFilters } from "actions/FilterListActions";
import { FilterListItem } from "./FilterListItem";

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
  };
};

const mapDispatchToProps = {
  setCurrentFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterListItem);
