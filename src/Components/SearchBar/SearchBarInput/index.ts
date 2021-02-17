import { connect } from "react-redux";

import { SearchBarInput } from "./SearchBarInput";
import {
  searchInputChange,
  updateAutocompleteList,
} from "actions/SearchBarActions";

const mapStateToProps = (state) => {
  return {
    autocompleteList: state.autocompleteList,
    searchInputValue: state.searchInputValue,
    filterSectionVisible: state.filterSectionVisible,
  };
};

const mapDispatchToProps = {
  searchInputChange,
  updateAutocompleteList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarInput);
