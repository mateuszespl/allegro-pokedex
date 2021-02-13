import { connect } from "react-redux";

import { PaginationSelect } from "./PaginationSelect";
import { setLimitValue } from "actions/PaginationActions";

const mapStateToProps = (state) => {
  return {
    limit: state.limit,
  };
};

const mapDispatchToProps = {
  setLimitValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationSelect);
