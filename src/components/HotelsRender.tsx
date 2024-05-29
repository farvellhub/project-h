import { type Hotel } from "../types";

declare interface Props {
    hotels: Hotel[]
}

const HotelsRender: React.FC<Props> = ( props ) => {
    return (
        <ul>
        {
            props.hotels.map(( hotel, index ) => (
                <li key={ index }>
                    { hotel.name }
                </li>
            ))
        }
        </ul>
    );
};

export default HotelsRender;