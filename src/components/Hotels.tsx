import { nanoid } from "nanoid";
import { type Hotel } from "../types";

import * as Utils from "./utils";

declare interface Props {
    hotels: Hotel[]
}

const listContainer = "mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
const itemContainer = "w-full min-w-[263px] sm:min-w-0 mx-auto sm:mx-0 bg-gray-100 rounded-lg shadow";
const wrapper = "p-4";
const itemTitle = "mb-2 text-2xl font-bold tracking-tight text-gray-800/90";
const itemZone = "text-xs py-0.5";
const itemStars = "flex py-0.5";
const itemBadges = "flex flex-col";


const Hotels: React.FC<Props> = ({ hotels }): JSX.Element => {
    const eid = nanoid( 5 );

    const setStars = ({ name, stars }: Hotel): string[] => {
        const container = [];
        for (let i = 0; i < stars; i++)
            container.push( name + eid + i );
        return container;
    }

    return (
        <ul className={ listContainer }>
        {
            hotels.map(( hotel, index ) => (
                <li className={ itemContainer } key={ hotel.name + eid + index }>
                    {
                        hotel.cover
                            ?   <img  
                                    className="cover"
                                    src={ hotel.cover }
                                    alt={ "hotel" + index }
                                />

                            : <Utils.Cover />
                    }
                    <section className={ wrapper }>
                        <h2 className={ itemTitle }>{ hotel.name }</h2>
                        <p className={ itemZone }>{ hotel.zone.name }</p>
                        <div className={ itemStars }>
                            {
                                setStars( hotel ).map(( key ) => <span key={ key }><Utils.Star /></span>)
                            }
                        </div>
                        <div className={ itemBadges }>
                            {
                                hotel.suite 
                                    ? <p className="badge"><Utils.Icons.BedIcon />{ "Suite plus: " + hotel.plusSuite + "€"}</p>
                                    : ""
                            }
                            {
                                hotel.spa
                                    ? <p className="badge"><Utils.Icons.SpaIcon />Spa available</p>
                                    : ""
                            }
                            {
                                hotel.gym
                                    ? <p className="badge"><Utils.Icons.GymIcon />Gym available</p>
                                    : ""
                            }
                            {
                                hotel.pool
                                    ? <p className="badge"><Utils.Icons.SwimmingIcon />Pool available</p>
                                    : ""
                            }
                            {
                                hotel.adapted
                                    ? <p className="badge"><Utils.Icons.WheelchairIcon />Invalid friendly</p>
                                    : ""
                            }
                            {
                                hotel.allInclusive
                                    ? <p className="badge"><Utils.Icons.GlassIcon />All inclusive</p>
                                    : ""
                            }
                        </div>
                    </section>
                </li>
            ))
        }
        </ul>
    );
};

export default Hotels;