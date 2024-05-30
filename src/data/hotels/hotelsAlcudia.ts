import type Hotel from "../../types/hotel";
import Zones from "../zones";

const hotelsAlcudia: Hotel[] = [
    {
        zone: Zones[2],
        name: "Hotel 1 Alcudia",
        email: "alcudia1@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 110
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 120
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 135
            }
        ],
        stars: 4,
        suite: true,
        plusSuite: 25,
        spa: false,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: Zones[2],
        name: "Hotel 2 Alcudia",
        email: "alcudia2@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 110
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 135
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 150
            }
        ],
        stars: 3,
        suite: false,
        spa: false,
        pool: true,
        adapted: false,
        allInclusive: true,
    },
    {
        zone: Zones[2],
        name: "Hotel 3 Alcudia",
        email: "alcudia3@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 135
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 155
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 225
            }
        ],
        stars: 5,
        suite: true,
        plusSuite: 45,
        spa: true,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: Zones[2],
        name: "Hotel 4 Alcudia",
        email: "alcudia1@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 100
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 110
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 120
            }
        ],
        stars: 4,
        suite: false,
        spa: false,
        pool: true,
        adapted: true,
        allInclusive: false,
    }
];

export default hotelsAlcudia;