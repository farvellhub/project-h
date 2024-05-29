import { type Zone } from "../types";

declare interface Props {
    zones: Zone[]
}


const ZonesRender: React.FC<Props> = ( props ) => {
    return (
        <ul>
        {
            props.zones.map(( zone: Zone ) => (
                <li key={ zone.id }>
                    { zone.name }
                </li>
            ))
        }
        </ul>
    );
};

export default ZonesRender;