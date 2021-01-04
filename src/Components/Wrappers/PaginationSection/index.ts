import { connect } from "react-redux";

import { PaginationSection } from "./PaginationSection";

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
  };
};

export default connect(mapStateToProps, null)(PaginationSection);
