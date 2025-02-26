import Search from "./Search";

import {
    type ChangeEventHandler,
    type MouseEventHandler
} from "react";


declare interface Props {
    handleSearch: ChangeEventHandler<HTMLInputElement>
    handleSubmit: MouseEventHandler<HTMLButtonElement>
    handleActive: MouseEventHandler<HTMLButtonElement>
}

const navbarWrapper = "wrapper flex justify-end mt-3 gap-4";
const newButton = "button text-gray-100 bg-green-500 hover:bg-green-600 whitespace-nowrap"

const Navbar: React.FC<Props> = ({ handleSearch, handleSubmit, handleActive }) => {
    return (
        <header className={navbarWrapper}>
            <Search
                handleSearch={handleSearch}
                handleSubmit={handleSubmit}
            />

            <button
                className={newButton}
                onClick={handleActive}
            >
                New +
            </button>
        </header>
    );
}

export default Navbar;