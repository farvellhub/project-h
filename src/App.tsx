import { motion, AnimatePresence } from "framer-motion";
import useLoaded from "./hooks/useLoaded";
import { type Motion } from "./types";

import { 
  Loader,
  Render
} from "./components";

function App({ isVisible }: Motion) {
  const loaded: boolean = useLoaded();

  return (
    loaded ? (
      <AnimatePresence>
        { isVisible && (
          <motion.section
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
