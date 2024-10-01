import { motion } from "framer-motion";
interface Prop {
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}
const ToggleButton = ({ setOpen }: Prop) => {
  return (
    <div>
      <div
        className="bg-transparent  relative border-none mt-0.5 z-50"
        onClick={() => setOpen((prev) => !prev)}

        // Optional: Add a scale animation while the button is tapped
      >
        <svg viewBox="0 0 23 23" width="20px" height="20px">
          <motion.path
            strokeWidth="3"
            stroke="#000000"
            strokeLinecap="round"
            // d='M 2 2.5 L 20 2.5'
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="#000000"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="#000000"
            strokeLinecap="round"
            // d='M 2 16.346 L 20 16.346'
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default ToggleButton;
