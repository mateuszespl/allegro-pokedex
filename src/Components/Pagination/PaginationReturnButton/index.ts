import { connect } from "react-redux";

import { PaginationReturnButton } from "./PaginationReturnButton";
import { returnButtonClick } from "actions/PaginationActions";

const mapDispatchToProps = {
  returnButtonClick,
};

export default connect(null, mapDispatchToProps)(PaginationReturnButton);
