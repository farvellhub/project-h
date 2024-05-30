function Search() {
    return (
        <form className="max-w-md mx-auto mb-6">   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative top-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 outline-none rounded-lg shadow bg-gray-50 focus:border-0" placeholder="Search hotels..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>

    );
}

export default Search;