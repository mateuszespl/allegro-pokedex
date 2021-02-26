import { connect } from "react-redux";

import { FilterListItem } from "./FilterListItem";
import { filterPokemons } from "actions/FilterListActions";

const mapDispatchToProps = {
  filterPokemons,
};

export default connect(null, mapDispatchToProps)(FilterListItem);
