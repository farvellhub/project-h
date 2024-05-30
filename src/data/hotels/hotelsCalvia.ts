import type Hotel from "../../types/hotel";
import Zones from "../zones";

const hotelsCalvia: Hotel[] = [
    {
        zone: Zones[1],
        name: "Hotel 1 Calvia",
        email: "calvia1@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 90
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 95
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 100
            }
        ],
        stars: 4,
        suite: true,
        plusSuite: 40,
        spa: false,
        pool: true,
        adapted: false,
        allInclusive: false,
    },
    {
        zone: Zones[1],
        name: "Hotel 2 Calvia",
        email: "calvia2@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 70
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 90
            }
        ],
        stars: 3,
        suite: false,
        spa: false,
        pool: true,
        adapted: false,
        allInclusive: false,
    }
];

export default hotelsCalvia;