import { IconsCollection } from "#data";

import { 
    type Hotel,
    type Icon 
 } from "#types";


declare interface Props {
    hotel: Hotel
}

const itemBadges = "grid grid-cols-2";

const ItemBadges: React.FC<Props> = ({ hotel }): JSX.Element => {
    return (
        <div className={ itemBadges }>
            {
                IconsCollection.map(({ name, icon, description }: Icon, index: number) => {
                    if ( !hotel[name] ) return;

                    return (
                        <p className="badge" key={ `${ hotel.id }-badge-${ index }` }>
                            { icon() } 
                            { 
                                name === "suite" 
                                    ? description + hotel.plusSuite + "€"
                                    : description
                            }
                        </p>
                    );
                })
            }
        </div>
    );
}

export default ItemBadges;