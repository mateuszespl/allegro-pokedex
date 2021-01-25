import { connect } from "react-redux";

import { setCurrentFilters } from "store/actionsCreator";
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
