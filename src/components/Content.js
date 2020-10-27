import React from 'react';

export default function Content({data, searchTerm}) {
  
    return (
        <div className="mx-3 mb-10 w-1/4">
            <img src={require(`../slices/${data["poster-image"]}`)} loading="lazy" className="w-24 md:w-11/12" alt="content_image" />
            <h1 className="text-white text-xs md:text-sm">{data.name}</h1>
        </div>
    )
}
