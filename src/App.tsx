import { motion } from "framer-motion";
import { HotelsMock } from "#data";

import { 
    useLoaded,
    useSearch
 } from "#hooks";

 import {
    Loader,
    Render,
    Navbar
 } from "#components";


const container = "px-6 lg:max-w-[1224px] lg:mx-auto";

function App(): JSX.Element {
    const loaded = useLoaded();
    const search = useSearch( HotelsMock );

    return (
        loaded ? (
            <motion.main 
                className={ container }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Navbar
                    handleSubmit={ search.handleSubmit }
                    handleSearch={ search.handleSearch }
                />

                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Render isVisible hotels={ search.hotels } />
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
