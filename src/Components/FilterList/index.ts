import { connect } from "react-redux";

import { FilterList } from "./FiltersList";

const mapStateToProps = (state) => {
  return {
    filterSectionVisible: state.filterSectionVisible,
  };
};

export default connect(mapStateToProps, null)(FilterList);
