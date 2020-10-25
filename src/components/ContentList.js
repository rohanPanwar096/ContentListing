import React, {useState} from 'react';
import Content from "./Content";
import VisibilitySensor from "react-visibility-sensor";
import {connect} from "react-redux";
import {store} from "../redux/store";
import {loadContents} from "../redux/actions/action";

const ContentList = ({contents, searchTerm}) => {
    console.log("contents",contents)
    console.log("SEARCHTERM", searchTerm)

    const [page, setPage] = useState(1);

    const fetchData = (page) => {
        return new Promise((resolve, reject) => {
            if(page !== 4) {
               resolve(require(`../api/CONTENTLISTINGPAGE-PAGE${page}.json`)); 
            }
        })
    }

    const onListEnd = async (isVisible) => {
        if(isVisible) {
            const response = await fetchData(page);
            console.log("Response",response.page["content-items"].content);
            store.dispatch(loadContents(response.page["content-items"].content));

            setPage(page + 1);
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



