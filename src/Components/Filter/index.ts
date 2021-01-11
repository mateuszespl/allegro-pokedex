import { connect } from "react-redux";

import { setCurrentFilters } from "store/actionsCreator";
import { Filter } from "./Filter";

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
  };
};

const mapDispatchToProps = {
  setCurrentFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
