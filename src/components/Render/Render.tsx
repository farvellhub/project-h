import { type Hotel } from "#types";
import ItemElement from "./ItemElement";

import { 
    AnimatePresence,
    motion 
} from "framer-motion";


declare interface Props {
    hotels: Hotel[]
    isVisible: boolean
}

const listContainer = "mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

const Render: React.FC<Props> = ({ isVisible, hotels }): JSX.Element => {
    return (
        <AnimatePresence>
            { isVisible && (
                <motion.ul 
                    className={ listContainer }
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {
                        hotels.map(( hotel, index ) => (
                            <ItemElement 
                                hotel={ hotel }
                                index={ index }
                            />
                        ))
                    }
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default Render;