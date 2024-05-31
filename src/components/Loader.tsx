import { motion } from "framer-motion"; 

const container = "w-[100vw] h-[100vh] flex justify-center items-center";
const spinner = "w-[50px] h-[50px] rounded-[50%] border-2 border-solid border-gray-400 border-t-gray-800";
const spin = "animate-spin ease-in-out";

function Loader(): JSX.Element {
  return (
    <motion.main
      className={ container }
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
        <div className={ spinner + spin }></div>
    </motion.main>
  );
}

export default Loader;
