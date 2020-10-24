import React from 'react';
import Content from "./Content";
import {connect} from "react-redux";

const ContentList = ({data}) => {
   console.log("contents", data)
    return (
        <div className="card-list">
          {data.Page1.map(data => {
            return (
                <div className="card-container">
                    <img src={require(`../slices/${data["poster-image"]}`)} className="w-11/12" />
                    <h1>{data.name}</h1>
                </div>
            )
          })}
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     console.log("STATE", state.contents["Page1"]);
//     return {
//         contents: state.contents
//     }
// }

// export default connect(mapStateToProps)(ContentList)

export default ContentList;

