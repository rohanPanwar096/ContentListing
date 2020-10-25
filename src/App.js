import React from 'react'
import SearchBar from "./components/SearchBar";
import ContentList from "./components/ContentList";


export default function App() {
    return (
        <div className="overflow-hidden bg-gray-900">
            <SearchBar />
            <div className="overflow-y-scroll h-screen">
                <ContentList />
            </div>
        </div>
    )
}
