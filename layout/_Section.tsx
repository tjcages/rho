import { motion, Variants } from "framer-motion";
import styles from "@/styles/section.module.scss";

interface Props {
  id: string;
  content: React.ReactNode;
  graphic: React.ReactNode;
  onEnter: (id: string) => void;
}

const variants: Variants = {
  offscreen: {
    y: 64,
    filter: "blur(8px)",
  },
  onscreen: {
    y: 0,
    filter: "blur(0)",
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const _ = ({ id, content, graphic, onEnter }: Props) => {
  return (
    <motion.section
      id={id}
      className={styles.main}
      initial="offscreen"
      whileInView="onscreen"
      // call function when in view
      onViewportEnter={() => onEnter(id)}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className={styles.content}>{content}</div>
      <motion.div className={styles.graphic} variants={variants}>
        {graphic}
      </motion.div>
    </motion.section>
  );
};

export default _;
