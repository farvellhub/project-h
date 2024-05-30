import Cover from "./Cover";
import Star from "./Star";
import { type Hotel } from "../types";

declare interface Props {
    hotels: Hotel[]
}

function setStars( n: number ): string[] {
    const container = [];
    for (let i = 0; i < n; i++)
        container.push( "*" );
    return container;
}

const Hotels: React.FC<Props> = ( props ) => {
    return (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            props.hotels.map(( hotel, index ) => (
                <li className="max-w-sm min-w-[263px] sm:min-w-0 mx-auto sm:mx-0 rounded-lg shadow" key={ index }>
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
                                setStars( hotel.stars ).map(() => <Star />)
                            }
                        </div>
                        {
                            hotel.suite 
                                ? <p className="badge">{ "Suite plus: " + hotel.plusSuite + "€"}</p>
                                : ""
                        }
                        {
                            hotel.spa
                                ? <p className="badge">Spa available</p>
                                : ""
                        }
                        {
                            hotel.pool
                                ? <p className="badge">Pool available</p>
                                : ""
                        }
                        {
                            hotel.adapted
                                ? <p className="badge">Adapted for invalid people</p>
                                : ""
                        }
                        {
                            hotel.allInclusive
                                ? <p className="badge">All inclusive</p>
                                : ""
                        }
                    </section>
                </li>
            ))
        }
        </ul>
    );
};

export default Hotels;