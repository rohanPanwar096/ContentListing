import React from 'react';
import Content from "./Content";
import {connect} from "react-redux";

const ContentList = ({contents}) => {
  if(!contents.Page1) {
      return null;
  }
    return (
        <div className="flex flex-wrap justify-center items-center">
          {contents.Page1.map(data => {
            return (
                <div className="mx-3 mb-10">
                    <img src={require(`../slices/${data["poster-image"]}`)} className="w-24 md:w-11/12" />
                    <h1 className="text-white text-sm sm:text-lg">{data.name}</h1>
                </div>
            )
          })}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log("STATE", state.contents.mainData);
    return {
        contents: state.contents.mainData
    }
}

export default connect(mapStateToProps)(ContentList)

// export default ContentList;

