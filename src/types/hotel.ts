import Zone from "./zone";
import Season from "./season";

declare interface Hotel {
    zone: Zone,
    name: string,
    email: string,
    cover: string,
    photos?: string[],
    seasons: Season[],
    stars: number,
    suite: boolean,
    plusSuite?: number,
    spa: boolean,
    pool: boolean,
    adapted: boolean,
    allInclusive: boolean
}

export default Hotel;