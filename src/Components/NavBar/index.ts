import { connect } from "react-redux";

import { setFilterSectionVisibility } from "actions/FilterListActions";
import { NavBar } from "./NavBar";

const mapStateToProps = (state) => {
  return {
    isFilterSectionVisible: state.isFilterSectionVisible,
  };
};

const mapDispatchToProps = {
  setFilterSectionVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
