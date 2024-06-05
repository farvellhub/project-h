import { type Hotel } from "#types";
import { StarIcon } from "#utils";


declare interface Props {
    hotel: Hotel
}

const itemStars = "flex py-0.5";

const ItemStars: React.FC<Props> = ({ hotel }): JSX.Element => {
    const setStarKeys = ({ id, stars }: Hotel): string[] => {
        const keys = [];
        for (let i = 0; i < stars; i++)
            keys.push( `${ id }-star-${ i }` );
        return keys;
    }

    return (
        <div className={ itemStars }>
            { 
                setStarKeys( hotel )
                    .map(( key ) => <span key={ key }><StarIcon /></span>) 
            }
        </div>
    );
};

export default ItemStars;