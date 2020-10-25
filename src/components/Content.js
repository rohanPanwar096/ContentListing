import React from 'react';
import LazyLoad from "react-lazyload";
import VisibilitySensor from "react-visibility-sensor";
import {loadContents} from "../redux/actions/action"
import axios from "axios";
import {store} from "../redux/store"

const Loading = () => {
    return (
        <div>
            <h5 className="text-white">Loading...</h5>
        </div>
    )
}

export default function Content({contents, searchTerm}) {
    return (
         <div className="flex flex-wrap justify-center items-center">
            {contents.Page1.page["content-items"].content.map(data => {
              if(data.name.toLowerCase().includes(searchTerm)) {
                  return (
                    <div className="mx-3 mb-10">
                      <img src={require(`../slices/${data["poster-image"]}`)} className="w-24 md:w-11/12" alt="content_image"/>
                      <h1 className="text-white text-xs md:text-sm">{data.name}</h1>
                    </div>
                  ) 
              }
            })}
          {/* <VisibilitySensor>
            {({isVisible}) => {
              console.log("visoble", isVisible)
               return (
                <div className="flex flex-wrap justify-center items-center">
                    {!isVisible ? contents.Page2.page["content-items"].content.map(data => {
                      if(data.name.toLowerCase().includes(searchTerm)) {
                        return (
                          <div className="mx-3 mb-10">
                            <img src={require(`../slices/${data["poster-image"]}`)} className="w-24 md:w-11/12" alt="content_image"/>
                            <h1 className="text-white text-xs md:text-sm">{data.name}</h1>
                          </div>
                    ) 
                  }
                  }) : null}
                </div>
               )
            }
            }
          </VisibilitySensor> */}
         
        </div>
    )
}
