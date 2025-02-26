import { motion } from "framer-motion";
import { HotelsMock } from "#data";

import { 
    useActive,
    useLoaded,
    useSearch
} from "#hooks";

 import {
    Loader,
    Render,
    Navbar
} from "#components";

const mainWrapper = "wrapper px-6"

function App(): JSX.Element {
    const loaded = useLoaded();
    const search = useSearch( HotelsMock );
    const active = useActive();

    return (
        loaded ? (
            <motion.main 
                className={ mainWrapper }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {   
                    active.getState() 
                        ? <div className="fixed top-0 left-0 px-4 w-[100vw] h-[100vh] bg-slate-800/60 z-10 transition">
                            <div className="relative bg-gray-100 min-h-[520px] sm:max-w-[620px] top-[15%] p-4 rounded-xl">
                            <button onClick={ active.handleDisabled } className="absolute top-0 end-0 p-4 text-gray-500 hover:text-gray-600">
                                    X
                                </button>
                            </div>
                        </div>
                        : ""
                }
                
                <Navbar
                    handleSubmit={ search.handleSubmit }
                    handleSearch={ search.handleSearch }
                    handleActive={ active.handleActive }
                />

                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Render hotels={ search.hotels } />
                </motion.section>
            </motion.main>
        ) : (
            <>
                <Loader />
            </>
        )
    );
}

export default App;
