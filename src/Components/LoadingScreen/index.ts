import { connect } from "react-redux";

import { LoadingScreen } from "./LoadingScreen";

const mapStateToProps = (state) => {
  return {
    pokemonDataList: state.pokemonDataList,
  };
};

export default connect(mapStateToProps, null)(LoadingScreen);
