import { motion, AnimatePresence } from "framer-motion";

import { Motion } from "./types"
import { Loader } from "./components";
import useLoaded from "./hooks/useLoaded";

const mainContent = `
  w-[100vw]
  h-[100vh]
  
  flex
  justify-center
  items-center
`;

const hello = `
  text-gray-800/90
  text-3xl
`;

function App({ isVisible }: Motion) {
  const loaded: boolean = useLoaded();

  return (
    loaded ? (
      <AnimatePresence>
        {isVisible && (
        <motion.section
          className={ mainContent }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className={ hello }>Hello World</h1>
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
