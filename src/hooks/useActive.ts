import { useState } from "react";


declare interface Active {
    handleActive: (e: React.FormEvent<HTMLButtonElement>) => void
    handleDisabled: (e: React.FormEvent<HTMLButtonElement>) => void
    getState: () => boolean
}

function useActive (): Active {
    const [ active, setActive ] = useState( false );
    
    function handleActive() {
        setActive( true );
    }
    
    function handleDisabled() {
        setActive( false );
    }
    
    function getState(): boolean {
        return active;
    }

    return {
        handleActive,
        handleDisabled,
        getState
    };
}

export default useActive;