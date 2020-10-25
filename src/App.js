import React, {useEffect} from 'react'
import SearchBar from "./components/SearchBar";
import { loadContents } from "./redux/actions/action";
import {store} from "./redux/store";
import ContentList from "./components/ContentList";
import axios from "axios";

export default function App() {

    useEffect(() => {
     async function fetchData() {
        const response = await axios.get("http://localhost:8080/data")
        console.log("Response",response.data);
        store.dispatch(loadContents(response.data));
     }
     fetchData()    
    }, [])

    return (
        <div className="overflow-hidden bg-gray-900">
            <SearchBar />
            <div className="overflow-y-scroll h-screen">
                <ContentList />
            </div>
        </div>
    )
}
