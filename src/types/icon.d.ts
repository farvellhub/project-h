import Hotel from "./hotel";

declare interface Icon {
    name: keyof Hotel
    icon: () => JSX.Element
    description: string
}

export default Icon;