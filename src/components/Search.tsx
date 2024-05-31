import { type ChangeEventHandler } from "react";
import { nanoid } from "nanoid";

declare interface Props {
    handleSearch: ChangeEventHandler<HTMLInputElement>
}

const formContainer = "max-w-sm sm:max-w-md mx-auto mb-6";
const label = "mb-2 text-sm font-medium text-gray-900 sr-only";
const searchContainer = "relative top-3";
const searchIcon = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none";
const searchIconSvg = "w-4 h-4 text-gray-500";
const searchInput = "block w-full p-4 ps-10 text-sm text-gray-900 bg-gray-100 outline-none rounded-lg shadow focus:border-0";
const searchSubmit = "absolute end-2.5 bottom-1.5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5";


function SearchIcon(): JSX.Element {
    return (
        <svg className={ searchIconSvg } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    );
}

const Search: React.FC<Props> = ({ handleSearch }): JSX.Element => {
    const uuid: string = nanoid();

    return (
        <form id={ uuid } className={ formContainer }>   
            <label htmlFor={ uuid } className={ label }>Search</label>
            <div className={ searchContainer }>
                <div className={ searchIcon }>
                    <SearchIcon />
                </div>
                <input 
                    id={ uuid }
                    type="search" 
                    className={ searchInput }
                    onChange={ handleSearch }
                    placeholder="Search hotels..."
                    required 
                />
                <button type="submit" className={ searchSubmit }>Search</button>
            </div>
        </form>
    );
}

export default Search;