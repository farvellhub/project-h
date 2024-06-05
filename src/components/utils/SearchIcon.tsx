const searchIcon = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none";
const searchIconSvg = "w-4 h-4 text-gray-500";

function SearchIcon(): JSX.Element {
    return (
        <div className={ searchIcon }>
            <svg className={ searchIconSvg } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    );
}

export default SearchIcon;