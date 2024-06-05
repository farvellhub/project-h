import { type Hotel } from "#types";
import { Cover } from "#utils";


declare interface Props {
    hotel: Hotel
    index: number
}

const ItemCover: React.FC<Props> = ({ hotel, index }): JSX.Element => {
    return (
        <>
            {
                hotel.cover
                    ?   <img  
                            className="cover"
                            src={ hotel.cover }
                            alt={ `hotel-cover-${ index }` }
                        />
                    : <Cover />
            }
        </>
    );
};

export default ItemCover;