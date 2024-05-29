import { useState } from "react";

import HotelsRender from "./HotelsRender";
import ZonesRender from "./ZonesRender";

import {
    Palma,
    ZoneCodes 
} from "../data";


function Render() {
    const [ hotels ] = useState( Palma );
    const [ zones ] = useState( ZoneCodes );

    return (
        <>
            <ZonesRender zones={ zones } />
            <HotelsRender hotels={ hotels } />
        </>
    );
}

export default Render;