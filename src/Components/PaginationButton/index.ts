import { connect } from "react-redux";

import { PaginationButton } from "./PaginationButton";
import { updateCurrentPage } from "../../store/actionsCreator";

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    limit: state.limit,
  };
};

const mapDispatchToProps = {
  updateCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationButton);
