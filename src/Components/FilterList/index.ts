import { connect } from "react-redux";

import { FilterList } from "./FiltersList";

const mapStateToProps = (state) => {
  return {
    filterSectionVisible: state.filterSectionVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
