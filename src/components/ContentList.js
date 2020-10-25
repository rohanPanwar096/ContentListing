import React, {useState} from 'react';
import Content from "./Content";
import VisibilitySensor from "react-visibility-sensor";
import axios from "axios"
import {connect} from "react-redux";
import {store} from "../redux/store";
import {loadContents} from "../redux/actions/action";

const ContentList = ({contents, searchTerm}) => {
    console.log("contents",contents)
    console.log("SEARCHTERM", searchTerm)

    const [page, setPage] = useState(1)

    const onListEnd = async (isVisible) => {
        if(isVisible) {
            const response = await axios.get(`http://localhost:8080/data/page/${page}`)
            console.log("Response",response.data);
            store.dispatch(loadContents(response.data));
            setPage(page + 1)
        }
    }

    return (
        <div className="flex flex-wrap justify-center items-center">
            {contents.map(data => {
              if(data.name.toLowerCase().includes(searchTerm)) {
                return <Content data={data} />
              }
            })}
            <VisibilitySensor onChange={onListEnd}>
                <div style={{visibility:"hidden"}}>
                    EOL dummy div
                </div>
            </VisibilitySensor>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("STATE", state.contents.mainData);
    return {
        contents: state.contents.mainData,
        searchTerm: state.contents.searchTerm
    }
}

export default connect(mapStateToProps)(ContentList)



