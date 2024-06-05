import Search from "./Search";

import { 
    type ChangeEventHandler, 
    type MouseEventHandler 
} from "react";


declare interface Props {
    handleSearch: ChangeEventHandler<HTMLInputElement>
    handleSubmit: MouseEventHandler<HTMLButtonElement>
}

const Navbar: React.FC<Props> = ({ handleSearch, handleSubmit }) => {
    return (
        <Search 
            handleSearch={ handleSearch }
            handleSubmit={ handleSubmit }
        />
    );
}

export default Navbar;