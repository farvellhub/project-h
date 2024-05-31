import { useEffect, useState } from "react";
import { type Hotel } from "../types";

import {
    Hotels,
    Search
} from "./";

import { hotelsMock } from "../data";


const zones = (( ...arrays: Hotel[][] ): Hotel[] => {
    const container: Hotel[] = [];
    arrays.forEach(( hotelsArray ) => {
        hotelsArray.forEach(( hotel ) => {
            container.push( hotel );
        });
    });
    return container;
})( hotelsMock );

const container = "px-6 lg:max-w-[1124px] lg:mx-auto";


function Render(): JSX.Element {
    const [ hotels, setHotels ] = useState( zones );
    const [ search, setSearch ] = useState("");

    const handleSearch = ( e: React.FormEvent<HTMLInputElement> ) => {
        console.log( e.currentTarget.value );
        setSearch( e.currentTarget.value );
    }

    useEffect(() => {
        
    })

    return (
        <div className={ container }>
            <Search handleSearch={ handleSearch } />
            <Hotels hotels={ hotels } />
        </div>
    );
}

export default Render;