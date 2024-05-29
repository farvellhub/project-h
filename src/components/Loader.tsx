import { motion } from "framer-motion"; 

const container = `
  w-[100vw]
  h-[100vh]

  flex
  justify-center
  items-center
`;

const spinner = `
  animate-spin
  ease-in-out

  w-[50px]
  h-[50px]
  rounded-[50%]

  border-2
  border-solid
  border-gray-400
  border-t-gray-800
`;

function Loader() {
  return (
    <motion.main
      className={ container }
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
        <section className={ spinner }></section>
    </motion.main>
  );
}

export default Loader;
