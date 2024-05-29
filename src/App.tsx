import { motion, AnimatePresence } from "framer-motion";
import useLoaded from "./hooks/useLoaded";
import { Motion } from "./types";

import { 
  Loader,
  Render
} from "./components";

const mainContent = `
  w-[100vw]
  h-[100vh]
  
  flex
  justify-center
  items-center
`;

function App({ isVisible }: Motion) {
  const loaded: boolean = useLoaded();

  return (
    loaded ? (
      <AnimatePresence>
        { isVisible && (
          <motion.section
            className={ mainContent }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Render />
          </motion.section>
        )}
      </AnimatePresence>
    ) : (
      <>
        <Loader />
      </>
    )
  );
}

export default App;
