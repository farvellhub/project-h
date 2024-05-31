import type Hotel from "../../types/hotel";
import Zones from "../zones";

const hotelsPalma: Hotel[] = [
    {
        zone: Zones[0],
        name: "Hotel 1 Palma de Mallorca",
        email: "palma1@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 70
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 85
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 110
            }
        ],
        stars: 4,
        suite: true,
        plusSuite: 35,
        spa: true,
        gym: false,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: Zones[0],
        name: "Hotel 2 Palma de Mallorca",
        email: "palma2@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 60
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 75
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
        gym: true,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: Zones[0],
        name: "Hotel 3 Palma de Mallorca",
        email: "palma3@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 120
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 140
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 155
            }
        ],
        stars: 5,
        suite: true,
        plusSuite: 60,
        spa: true,
        gym: false,
        pool: true,
        adapted: true,
        allInclusive: true,
    },
    {
        zone: Zones[0],
        name: "Hotel 4 Palma de Mallorca",
        email: "palma2@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 80
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
                price: 120
            }
        ],
        stars: 3,
        suite: true,
        plusSuite: 60,
        spa: false,
        gym: true,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: Zones[0],
        name: "Hotel 5 Palma de Mallorca",
        email: "palma3@hotel.com",
        seasons: [
            {
                name: "low-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 150
            },
            {
                name: "mid-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 170
            },
            {
                name: "high-season",
                dateFrom: new Date( Date.now() ),
                dateAt: new Date( Date.now() ),
                price: 180
            }
        ],
        stars: 5,
        suite: true,
        plusSuite: 60,
        spa: true,
        gym: true,
        pool: true,
        adapted: true,
        allInclusive: true,
    }
];

export default hotelsPalma;