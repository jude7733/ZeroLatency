import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.5, ease: "easeInOut" },
  },
};
const slideInTop = {
  hidden: { opacity: 0, y: -100 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 * index },
  }),
};
const slideInBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
  },
};
export const CustomAnimation = ({ children, mode, index = 1 }) => {
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
      whileInView="visible"
      custom={index}
      viewport={{ once: true }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        maxWidth: "500px",
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
export const LogoAnimation = ({ children, mode }) => {
  return (
    <motion.div
      variants={{
        left: { x: -20, opacity: 0 },
        right: { x: 20, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
        },
      }}
      initial={mode}
      exit={mode}
      whileInView="visible"
      style={{
        textAlign: "center",
        maxWidth: "200px",
        minWidth: "50px",
      }}
    >
      {children}
    </motion.div>
  );
};
