import React from 'react';
import {connect} from "react-redux";
import {searchContents} from "../redux/actions/action";
import {store} from "../redux/store";

const SearchInput = () => {
    return (
        <input onChange={(e) => (
            store.dispatch(searchContents(e.target.value))
        )} className="text-black w-10/12" />
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        searchTerm: state.searchTerm
    }
}

export default connect(mapStateToProps)(SearchInput)
