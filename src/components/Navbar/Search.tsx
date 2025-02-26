import { nanoid } from "nanoid";

import { 
    type ChangeEventHandler, 
    type MouseEventHandler 
} from "react";

import { SearchIcon } from "#utils";

declare interface Props {
    handleSearch: ChangeEventHandler<HTMLInputElement>
    handleSubmit: MouseEventHandler<HTMLButtonElement>
}

const formContainer = "w-full max-w-[520px]";
const label = "text-sm font-medium text-gray-900 sr-only";
const searchContainer = "relative";
const searchInput = "block w-full p-4 ps-10 text-sm text-gray-900 bg-gray-100 outline-none rounded-lg shadow focus:border-0";
const searchIcon = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none";
const searchIconSvg = "w-4 h-4 text-gray-500";
const searchSubmit = "button absolute end-0 bottom-0 text-white bg-blue-700 hover:bg-blue-800 rounded-t-[0px] rounded-b-[0px]";

const Search: React.FC<Props> = ({ handleSearch, handleSubmit }): JSX.Element => {
    const uuid: string = nanoid();

    return (
        <form id={ uuid } className={ formContainer }>   
            <label htmlFor={ uuid } className={ label }>Search</label>
            <div className={ searchContainer }>
                <SearchIcon 
                    searchIcon={ searchIcon } 
                    searchIconSvg={ searchIconSvg }
                />
                <input 
                    id={ uuid }
                    type="search" 
                    className={ searchInput }
                    onChange={ handleSearch }
                    placeholder="Search hotels..."
                    required 
                />
                <button 
                    type="submit" 
                    className={ searchSubmit }
                    onClick={ handleSubmit }
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export default Search;