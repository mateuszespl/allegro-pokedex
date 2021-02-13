import { connect } from "react-redux";

import { FilterListItemBox } from "./FilterListItemBox";
import {
  setWeightValue,
  setHeightValue,
  setTypeValue,
} from "actions/FilterListActions";

const mapStateToProps = (state) => {
  return {
    typeValue: state.typeValue,
    weightValue: state.weightValue,
    heightValue: state.heightValue,
  };
};

const mapDispatchToProps = {
  setWeightValue,
  setHeightValue,
  setTypeValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterListItemBox);
