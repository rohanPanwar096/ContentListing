import React, {useState} from 'react';
import {FaArrowLeft} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import SearchInput from "../components/SearchInput";

export default function SearchBar() {
    const [search, setSearch] = useState(false);
    return (
        <div className="flex justify-between items-center px-6 py-8 text-white">
            {search ?  <SearchInput /> : (
            <div className="flex self-start items-center">
              <FaArrowLeft className="mr-2"/>
              <h1 className="tracking-wider font-light">Romantic Comedy</h1>   
            </div>
            )}
            <AiOutlineSearch className="text-2xl" onClick={() => setSearch(!search)}/>
        </div>
    )
}
