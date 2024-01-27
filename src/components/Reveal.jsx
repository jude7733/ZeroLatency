import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
  },
};
const slideInLeft = {
  hidden: { opacity: 0, x: 500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
  },
};
export const Reveal = ({ children, mode }) => {
  return (
    <motion.div
      variants={mode === "slideInLeft" ? slideInLeft : reveal}
      initial="hidden"
      exit="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </motion.div>
  );
};
