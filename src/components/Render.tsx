import { useEffect, useState } from "react";
import { hotelsMock } from "../data";

import {
    Hotels,
    Search
} from "./";

const container = "px-6 lg:max-w-[1124px] lg:mx-auto";


function Render(): JSX.Element {
    const [ hotels, setHotels ] = useState( hotelsMock );
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