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

const formContainer = "max-w-sm sm:max-w-md mx-auto mb-6";
const label = "mb-2 text-sm font-medium text-gray-900 sr-only";
const searchContainer = "relative top-3";
const searchInput = "block w-full p-4 ps-10 text-sm text-gray-900 bg-gray-100 outline-none rounded-lg shadow focus:border-0";
const searchSubmit = "absolute end-2.5 bottom-1.5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5";

const Search: React.FC<Props> = ({ handleSearch, handleSubmit }): JSX.Element => {
    const uuid: string = nanoid();

    return (
        <form id={ uuid } className={ formContainer }>   
            <label htmlFor={ uuid } className={ label }>Search</label>
            <div className={ searchContainer }>
                <SearchIcon />
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