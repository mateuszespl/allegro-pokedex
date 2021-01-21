import { connect } from "react-redux";

import { Pagination } from "./Pagination";

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
  };
};

export default connect(mapStateToProps, null)(Pagination);
