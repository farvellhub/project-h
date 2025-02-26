import { type Hotel } from "#types";
import ItemElement from "./ItemElement";


declare interface Props {
    hotels: Hotel[]
}

const listContainer = "mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

const Render: React.FC<Props> = ({ hotels }): JSX.Element => {
    return (
        <ul className={ listContainer }>
            {
                hotels.map(( hotel, index ) => (
                    <ItemElement 
                        key={ `${ hotel.id }-item-${ index }`}
                        hotel={ hotel }
                        index={ index }
                    />
                ))
            }
        </ul>
    );
};

export default Render;