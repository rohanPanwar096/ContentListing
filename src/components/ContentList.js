import React from 'react';
import Content from "./Content";
import {connect} from "react-redux";

const ContentList = ({contents, searchTerm}) => {
  if(!contents.Page1) {
      return null;
  }

  console.log(contents.Page1.page["content-items"].content)
  console.log("SEARCHTERM", searchTerm)
    return <Content contents={contents} searchTerm={searchTerm} />
}

const mapStateToProps = (state, ownProps) => {
    console.log("STATE", state.contents.mainData);
    return {
        contents: state.contents.mainData,
        searchTerm: state.contents.searchTerm
    }
}

export default connect(mapStateToProps)(ContentList)

// export default ContentList;

