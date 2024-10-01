import { motion } from "framer-motion";
interface Props {
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const ResponsiveSidebar = ({ setOpen }: Props) => {
  // const ItemVariants = {
  //   closed: {
  //     clipPath: "circle(30px at 50px 50px)",
  //     transition: {
  //       delay: 0.5,
  //       type: "spring",
  //       damping: 40,
  //     },
  //   },
  //   open: {
  //     clipPath: "circle(1200px at 50px 50px)",
  //     transition: {
  //       type: "spring",
  //       stiffness: 20,
  //       damping: 40,
  //     },
  //   },
  // };

  return (
    <>
      <motion.div className="lg:hidden relative">
        <motion.div
          initial={{
            clipPath: "circle(30px at 85% 50px)",
          }}
          animate={{
            clipPath: "circle(1000px at 90% 50px)",
          }}
          transition={{
            delay: 0,
            type: "spring",
            damping: 20,
            stiffness: 30,
          }}
          className="absolute right-0 h-[100vh] pb-9 bg-white w-[50%] overflow-auto px-5"
        >
          <motion.ul className="px-10 py-6 flex flex-col justify-center mt-24 font-bold  text-lg text-white">
            <motion.li className=" text-lg text-black">
              <span onClick={() => setOpen(false)}>Home</span>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 text-black "
              // variants={ItemVariants}
            >
              <span onClick={() => setOpen(false)}>About</span>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 text-black"
              // variants={ItemVariants}
            >
              <span onClick={() => setOpen(false)}>Service</span>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 text-black"
              // variants={ItemVariants}
            >
              <span onClick={() => setOpen(false)}>Contact</span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  );
};
export default ResponsiveSidebar;
