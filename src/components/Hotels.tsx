import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";

import { IconCollection } from "#data";

import { 
    type Icon, 
    type Hotel 
} from "#types";

import { 
    Cover, 
    Star 
} from "#utils";


declare interface Props {
    hotels: Hotel[]
    isVisible: boolean
}

const listContainer = "mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
const itemContainer = "w-full min-w-[263px] sm:min-w-0 mx-auto sm:mx-0 bg-gray-100 rounded-lg shadow";
const itemWrapper = "p-4";
const itemTitle = "mb-2 text-2xl font-bold tracking-tight text-gray-800/90";
const itemZone = "text-xs py-0.5";
const itemStars = "flex py-0.5";
const itemBadges = "grid grid-cols-2";


const Hotels: React.FC<Props> = ({ isVisible, hotels }): JSX.Element => {
    const eid = nanoid( 5 );

    const setStars = ({ name, stars }: Hotel): string[] => {
        const container = [];
        for (let i = 0; i < stars; i++)
            container.push( name + eid + i );
        return container;
    }

    return (
        <AnimatePresence>
            { isVisible && (
                <motion.ul 
                    className={ listContainer }
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {
                        hotels.map(( hotel, index ) => (
                            <li className={ itemContainer } key={ hotel.name + eid + index }>
                                {
                                    hotel.cover
                                        ?   <img  
                                                className="cover"
                                                src={ hotel.cover }
                                                alt={ "hotel " + index }
                                            />
                                        : <Cover />
                                }
                                <section className={ itemWrapper }>
                                    <h2 className={ itemTitle }>{ hotel.name }</h2>
                                    <p className={ itemZone }>{ hotel.zone.name }</p>
                                    <div className={ itemStars }>
                                        { setStars( hotel ).map(( key ) => <span key={ key }><Star /></span>) }
                                    </div>
                                    <div className={ itemBadges }>
                                        {
                                            IconCollection.map(({ name, icon, description }: Icon, index: number) => {
                                                if ( !hotel[name] ) return;
        
                                                return (
                                                    <p className="badge" key={ eid + name + index }>
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
                                </section>
                            </li>
                        ))
                    }
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default Hotels;