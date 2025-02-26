declare interface Props {
    searchIcon: string
    searchIconSvg: string
}

const SearchIcon: React.FC<Props> = ({ searchIcon, searchIconSvg }): JSX.Element => {
    return (
        <div className={ searchIcon }>
            <svg className={ searchIconSvg } aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    );
}

export default SearchIcon;