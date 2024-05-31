import { nanoid } from "nanoid";
import { type Hotel } from "../types";

import {
    BedIcon,
    Cover,
    GlassIcon,
    GymIcon,
    Star,
    SpaIcon,
    SwimmingIcon,
    WheelchairIcon
} from "./utils";

declare interface Props {
    hotels: Hotel[]
}


const Hotels: React.FC<Props> = ({ hotels }) => {
    const eid = nanoid( 5 );

    const setStars = ({ name, stars }: Hotel): string[] => {
        const container = [];
        for (let i = 0; i < stars; i++)
            container.push( name + eid + i );
        return container;
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            hotels.map(( hotel, index ) => (
                <li className="w-full min-w-[263px] sm:min-w-0 mx-auto sm:mx-0 bg-gray-100 rounded-lg shadow" key={ hotel.name + eid + index }>
                    {
                        hotel.cover
                            ?   <img  
                                    className="rounded-t-lg"
                                    src={ hotel.cover }
                                    alt={ "hotel" + index }
                                />

                            : <Cover />
                    }
                    <section className="p-4">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-800/90">{ hotel.name }</h2>
                        <p className="text-xs py-0.5">{ hotel.zone.name }</p>
                        <div className="flex py-0.5">
                            {
                                setStars( hotel ).map(( key ) => <span key={ key }><Star /></span>)
                            }
                        </div>
                        <div className="">
                            {
                                hotel.suite 
                                    ? <p className="badge"><BedIcon />{ "Suite plus: " + hotel.plusSuite + "€"}</p>
                                    : ""
                            }
                            {
                                hotel.spa
                                    ? <p className="badge"><SpaIcon />Spa available</p>
                                    : ""
                            }
                            {
                                hotel.gym
                                    ? <p className="badge"><GymIcon />Gym available</p>
                                    : ""
                            }
                            {
                                hotel.pool
                                    ? <p className="badge"><SwimmingIcon />Pool available</p>
                                    : ""
                            }
                            {
                                hotel.adapted
                                    ? <p className="badge"><WheelchairIcon />Invalid friendly</p>
                                    : ""
                            }
                            {
                                hotel.allInclusive
                                    ? <p className="badge"><GlassIcon />All inclusive</p>
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