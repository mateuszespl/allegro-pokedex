import { connect } from "react-redux";

import { FilterBox } from "./FilterBox";
import {
  setWeightValue,
  setHeightValue,
  setTypeValue,
} from "store/actionsCreator";

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

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox);
