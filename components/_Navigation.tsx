import { motion, Variants } from "framer-motion";
import styles from "@/styles/navigation.module.scss";
import { DataProps } from "@/data";

interface Props {
  data: DataProps[];
  selected: string | null;
}

const variants: Variants = {
  offscreen: {
    y: 24,
    filter: "blur(8px)",
    opacity: 0.5,
  },
  onscreen: {
    y: 0,
    filter: "blur(0)",
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const _ = ({ data, selected }: Props) => {
  return (
    <div className={styles.main}>
      <strong>Jump to Section</strong>
      <div className={styles.sections}>
        {data.map((section) => (
          <motion.button
            key={"navigation-" + section.id}
            className={`${styles.section} ${
              selected == section.title ? styles.selected : ""
            }`}
            variants={variants}
            onClick={() => {
              const element = document.getElementById(section.title);
              if (!element) return;
              const y =
                element.getBoundingClientRect().top + window.pageYOffset - 64;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
          >
            <strong>{section.subtitle}</strong>
            <h5>{section.title}</h5>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default _;
