import React from 'react';
import Content from "./Content";
import {connect} from "react-redux";

const ContentList = ({contents}) => {
   console.log("contents", contents)
    return (
        <div className="">
          
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log("STATE", state.contents["Page1"]);
    return {
        contents: state.contents
    }
}

export default connect(mapStateToProps)(ContentList)

