import { useState } from "react";
import { Hotel } from "#types";


declare interface Search {
    handleSearch: (e: React.FormEvent<HTMLInputElement>) => void
    handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void
    hotels: Hotel[]
}

function useSearch(hotelsMock: Hotel[]): Search {
    const [ hotels, setHotels ] = useState( hotelsMock );
    const [ search, setSearch ] = useState( "" );

    const handleSearch = ( e: React.FormEvent<HTMLInputElement> ) => {
        setSearch( e.currentTarget.value );
    }

    const filterHotels = () => {
        if ( search === "" ) return hotelsMock;

        return hotelsMock.map(( hotel ) => {
            if (
                hotel.name.toLowerCase().includes( search.toLowerCase() )
                || hotel.zone.name.toLowerCase().includes( search.toLowerCase() )
                || hotel.email.toLowerCase().includes( search.toLowerCase() )
            ) return hotel;
        }).filter(( hotel ) => hotel !== undefined);
    }

    const handleSubmit = ( e: React.FormEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        setHotels( filterHotels() );
    }

    return {
        handleSearch,
        handleSubmit,
        hotels
    }
}

export default useSearch;