import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const slideInTop = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
  },
};
const slideInBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
  },
};
export const CustomAnimation = ({ children, mode }) => {
  return (
    <motion.div
      variants={
        mode === "slideInTop"
          ? slideInTop
          : mode === "slideInBottom"
          ? slideInBottom
          : reveal
      }
      initial="hidden"
      exit="hidden"
      whileInView="visible"
      // viewport={{ once: true }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
        shrink: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export const ButtonAnimation = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const VideoAnimation = ({ children }) => {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      exit="hidden"
      whileInView="visible"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
        marginBottom: "30vh",
        marginTop: "30vh",
      }}
    >
      {children}
    </motion.div>
  );
};

export const TextAnimation = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 100, opacity: 0 },
        fadeUp: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      }}
      initial="hidden"
      exit="hidden"
      whileInView="fadeUp"
      style={{
        textAlign: "center",
        maxWidth: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};
