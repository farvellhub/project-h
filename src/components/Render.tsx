import { useState } from "react";
import { hotelsMock } from "../data";

import {
    Hotels,
    Search
} from "./";

const container = "px-6 lg:max-w-[1224px] lg:mx-auto";


function Render(): JSX.Element {
    const [ hotels, setHotels ] = useState( hotelsMock );
    const [ search, setSearch ] = useState("");

    const handleSearch = ( e: React.FormEvent<HTMLInputElement> ) => {
        setSearch( e.currentTarget.value );
        console.log( search );
    }

    const filterHotels = () => {
        if ( search === "" ) return hotelsMock;

        return hotelsMock.map(( hotel ) => {
            if ( 
                hotel.name.toLowerCase().includes( search.toLowerCase() ) 
                || hotel.zone.name.toLowerCase().includes( search.toLowerCase() )
                || hotel.email.toLowerCase().includes( search.toLowerCase() )
            ) return hotel;
        }).filter( ( hotel ) => hotel !== undefined );
    }

    const handleSubmit = ( e: React.FormEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        setHotels( filterHotels() );
    }

    return (
        <div className={ container }>
            <Search handleSubmit={ handleSubmit } handleSearch={ handleSearch } />
            <Hotels hotels={ hotels } />
        </div>
    );
}

export default Render;