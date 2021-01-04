import { connect } from "react-redux";

import { SearchInput } from "./SearchInput";
import {
  searchInputChange,
  updateAutocompleteList,
} from "./../../store/actionsCreator";

const mapStateToProps = (state) => {
  return {
    autocompleteList: state.autocompleteList,
    searchInputValue: state.searchInputValue,
    filterSectionVisible: state.filterSectionVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(searchInputChange(e)),
    updateAutocompleteList: () => dispatch(updateAutocompleteList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
