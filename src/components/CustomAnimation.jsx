import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
  },
};
const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
  },
};
export const CustomAnimation = ({ children, mode }) => {
  return (
    <motion.div
      variants={
        mode === "slideInLeft"
          ? slideInLeft
          : mode === "slideInRight"
          ? slideInRight
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
        maxWidth: "95%",
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
        marginTop: "40vh",
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
        width: "max-content",
      }}
    >
      {children}
    </motion.div>
  );
};
