import Hotel from "../../types/hotel";
import Zones from "../zones";

const hotelsPalma: Hotel[] = [
    {
        zone: Zones[0],
        name: "Hotel 1 Palma de Mallorca",
        email: "palma1@hotel.com",
        cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fschools%2F38830-lasalle-college%2Fstudents&psig=AOvVaw2y5kK5JVpaGlVIK7Z0xkNs&ust=1717039739107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDz3M_1sYYDFQAAAAAdAAAAABAE",
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
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: Zones[0],
        name: "Hotel 2 Palma de Mallorca",
        email: "palma2@hotel.com",
        cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fschools%2F38830-lasalle-college%2Fstudents&psig=AOvVaw2y5kK5JVpaGlVIK7Z0xkNs&ust=1717039739107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDz3M_1sYYDFQAAAAAdAAAAABAE",
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
        pool: true,
        adapted: true,
        allInclusive: false,
    },
    {
        zone: Zones[0],
        name: "Hotel 3 Palma de Mallorca",
        email: "palma3@hotel.com",
        cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fschools%2F38830-lasalle-college%2Fstudents&psig=AOvVaw2y5kK5JVpaGlVIK7Z0xkNs&ust=1717039739107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDz3M_1sYYDFQAAAAAdAAAAABAE",
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
        pool: true,
        adapted: true,
        allInclusive: true,
    }
];

export default hotelsPalma;