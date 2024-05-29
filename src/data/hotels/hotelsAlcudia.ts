import type Hotel from "../../types/hotel";
import Zones from "../zones";

const hotelsAlcudia: Hotel[] = [
    {
        zone: Zones[2],
        name: "Hotel 1 Alcudia",
        email: "alcudia1@hotel.com",
        cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fschools%2F38830-lasalle-college%2Fstudents&psig=AOvVaw2y5kK5JVpaGlVIK7Z0xkNs&ust=1717039739107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDz3M_1sYYDFQAAAAAdAAAAABAE",
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
        cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fschools%2F38830-lasalle-college%2Fstudents&psig=AOvVaw2y5kK5JVpaGlVIK7Z0xkNs&ust=1717039739107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDz3M_1sYYDFQAAAAAdAAAAABAE",
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
        cover: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domestika.org%2Fes%2Fschools%2F38830-lasalle-college%2Fstudents&psig=AOvVaw2y5kK5JVpaGlVIK7Z0xkNs&ust=1717039739107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDz3M_1sYYDFQAAAAAdAAAAABAE",
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
    }
];

export default hotelsAlcudia;