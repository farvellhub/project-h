import { useState } from "react";
import { type Hotel } from "../types";

import Hotels from "./Hotels";

import { 
    Palma,
    Calvia,
    Alcudia
} from "../data";

function scrapZones( ...arrays: Hotel[][] ): Hotel[] {
    const container: Hotel[] = [];
    arrays.forEach(( hotelsArray ) => {
        hotelsArray.forEach(( hotel ) => {
            container.push( hotel );
        });
    });
    return container;
}

const zones = scrapZones( Palma, Calvia, Alcudia );

function Render() {
    const [ hotels ] = useState( zones );

    return (
        <div className="p-6 lg:max-w-[1024px] lg:mx-auto">
            <Hotels hotels={ hotels } />
        </div>
    );
}

export default Render;