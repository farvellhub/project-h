import { type Hotel } from "#types";
import { zoneCodes } from "#data";

const hotels: Hotel[] = [
    {
        zone: zoneCodes[2],
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
        jacuzzi: true,
        beach: false,
        pets: false,
        gym: false,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: zoneCodes[2],
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
        jacuzzi: false,
        beach: false,
        pets: false,
        gym: true,
        pool: true,
        adapted: false,
        allInclusive: true,
    },
    {
        zone: zoneCodes[2],
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
        jacuzzi: true,
        beach: false,
        pets: false,
        gym: true,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: zoneCodes[2],
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
        jacuzzi: false,
        beach: false,
        pets: true,
        gym: false,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: zoneCodes[1],
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
        jacuzzi: false,
        beach: false,
        pets: true,
        gym: false,
        pool: true,
        adapted: false,
        allInclusive: false,
    },
    {
        zone: zoneCodes[1],
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
        jacuzzi: false,
        beach: true,
        pets: false,
        gym: true,
        pool: true,
        adapted: false,
        allInclusive: false,
    },
    {
        zone: zoneCodes[0],
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
        jacuzzi: true,
        beach: false,
        pets: false,
        gym: false,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: zoneCodes[0],
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
        jacuzzi: true,
        beach: false,
        pets: false,
        gym: true,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: zoneCodes[0],
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
        jacuzzi: false,
        beach: false,
        pets: true,
        gym: false,
        pool: true,
        adapted: true,
        allInclusive: true,
    },
    {
        zone: zoneCodes[0],
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
        jacuzzi: false,
        beach: true,
        pets: false,
        gym: true,
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: zoneCodes[0],
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
        jacuzzi: true,
        beach: false,
        pets: false,
        gym: true,
        pool: true,
        adapted: true,
        allInclusive: true,
    }
];

export default hotels;