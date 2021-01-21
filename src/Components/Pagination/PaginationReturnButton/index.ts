import { connect } from "react-redux";

import { PaginationReturnButton } from "./PaginationReturnButton";
import { returnButtonClick } from "../../../store/actionsCreator";

const mapDispatchToProps = {
  returnButtonClick,
};

export default connect(null, mapDispatchToProps)(PaginationReturnButton);
