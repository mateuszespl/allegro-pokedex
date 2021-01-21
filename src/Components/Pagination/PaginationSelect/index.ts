import { PaginationSelect } from "./PaginationSelect";
import { connect } from "react-redux";
import { setLimitValue } from "../../../store/actionsCreator";

const mapStateToProps = (state) => {
  return {
    limit: state.limit,
  };
};

const mapDispatchToProps = {
  setLimitValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationSelect);
