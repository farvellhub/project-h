import { Icons } from "#utils";
import { type Icon } from "#types";

const icons: Icon[] = [
    {
        name: "suite",
        icon: Icons.BedIcon,
        description: "Suite: "
    },
    {
        name: "pets",
        icon: Icons.PetsIcon,
        description: "Pets allowed"
    },
    {
        name: "gym",
        icon: Icons.GymIcon,
        description: "Gym available"
    },
    {
        name: "spa",
        icon: Icons.SpaIcon,
        description: "Spa available"
    },
    {
        name: "jacuzzi",
        icon: Icons.JacuzziIcon,
        description: "Jacuzzi available"
    },
    {
        name: "pool",
        icon: Icons.SwimmingIcon,
        description: "Pool available"
    },
    {
        name: "beach",
        icon: Icons.BeachIcon,
        description: "Beach access"
    },
    {
        name: "adapted",
        icon: Icons.WheelchairIcon,
        description: "Invalid friendly"
    },
    {
        name: "allInclusive",
        icon: Icons.GlassIcon,
        description: "All inclusive"
    }
]

export default icons;