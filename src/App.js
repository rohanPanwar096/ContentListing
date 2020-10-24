import React, {useEffect} from 'react'
import SearchBar from "./components/SearchBar";
import data1 from "./api/CONTENTLISTINGPAGE-PAGE1.json";
import data2 from "./api/CONTENTLISTINGPAGE-PAGE2.json";
import data3 from "./api/CONTENTLISTINGPAGE-PAGE3.json";
import { loadContents } from "./redux/actions/action";
import {store} from "./redux/store";
import ContentList from "./components/ContentList"

export default function App() {
    const contentList1 = data1.page["content-items"].content;
    const contentList2 = data2.page["content-items"].content;
    const contentList3 = data3.page["content-items"].content;
    const data = {
        Page1: contentList1,
        Page2: contentList2,
        Page3: contentList3
    }

    useEffect(() => {
        store.dispatch(loadContents(data));
    })

    return (
        <div className="bg-gray-900 h-screen">
            <SearchBar />
            <ContentList />
        </div>
    )
}
