import React from 'react'

export default function SearchInput() {
    return (
        <input onChange={(e) => (
            console.log(e.target.value)
        )} className="text-black w-10/12"/>
    )
}
