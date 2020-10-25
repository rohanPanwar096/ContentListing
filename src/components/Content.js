import React from 'react';
import LazyLoad from "react-lazyload";

const Loading = () => (
  <div className="w-24">
    <h3 className="text-lg text-white tracking-wider">Loading...</h3>
  </div>
)
export default function Content({data, searchTerm}) {
  console.log("CONTENTS", data)
    return (
        <div className="mx-3 mb-10">
          <LazyLoad placeholder={<Loading />}>
            <img src={require(`../slices/${data["poster-image"]}`)} className="w-24 md:w-11/12" alt="content_image"/>
            <h1 className="text-white text-xs md:text-sm">{data.name}</h1>
          </LazyLoad>
        </div>
    )
}
