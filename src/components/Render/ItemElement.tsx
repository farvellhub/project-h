import { type Hotel } from "#types";

import ItemBadges from "./ItemBadges";
import ItemCover from "./ItemCover";
import ItemStars from "./ItemStars";


declare interface Props {
    hotel: Hotel
    index: number
}

const itemContainer = "w-full min-w-[263px] sm:min-w-0 mx-auto sm:mx-0 bg-gray-100 rounded-lg shadow";
const itemWrapper = "p-4";
const itemTitle = "mb-2 text-2xl font-bold tracking-tight text-gray-800/90";
const itemZone = "text-xs py-0.5";

const ItemElement: React.FC<Props> = ({ hotel, index }): JSX.Element => {
    return (
        <li className={ itemContainer }>
            <ItemCover hotel={ hotel } index={ index } />

            <section className={ itemWrapper }>
                <h2 className={ itemTitle }>{ hotel.name }</h2>
                <p className={ itemZone }>{ hotel.zone.name }</p>

                <ItemStars hotel={ hotel } />
                <ItemBadges hotel={ hotel } />
            </section>
        </li>
    );
};

export default ItemElement;