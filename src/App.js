import React, {useEffect} from 'react'
import SearchBar from "./components/SearchBar";
import data1 from "./api/CONTENTLISTINGPAGE-PAGE1.json";
import data2 from "./api/CONTENTLISTINGPAGE-PAGE2.json";
import data3 from "./api/CONTENTLISTINGPAGE-PAGE3.json";
import { loadContents } from "./redux/actions/action";
import {store} from "./redux/store";
import ContentList from "./components/ContentList";
import axios from "axios";

export default function App() {

    useEffect(async () => {
        const response = await axios.get("http://localhost:8080/data")
        console.log("Redsp",response.data);
        store.dispatch(loadContents(response.data));
    })

    return (
        <div className="overflow-hidden bg-gray-900 overflow-y-scroll">
            <SearchBar />
            <ContentList />
        </div>
    )
}
