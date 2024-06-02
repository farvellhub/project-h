import { useState, useEffect } from "react";

function useLoaded (): boolean {
    const [ loaded, setLoaded ] = useState( false );
    
    useEffect(() => {
        setTimeout(() => {
            setLoaded( true );
        }, 2000 );
    }, []);

    return loaded;
}

export default useLoaded;