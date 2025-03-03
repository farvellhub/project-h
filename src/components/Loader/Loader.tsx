import { motion } from "framer-motion"; 

const container = "w-[100vw] h-[100vh] grid place-content-center bg-[#eee]";
const spinner = "animate-spin ease-in-out w-[50px] h-[50px] rounded-[50%] border-2 border-solid border-gray-400 border-t-gray-800";

function Loader(): JSX.Element {
  return (
    <motion.main
      className={ container }
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.7 }}
    >
        <div className={ spinner }></div>
    </motion.main>
  );
}

export default Loader;
