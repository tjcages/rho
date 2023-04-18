import { motion, useScroll, useSpring } from "framer-motion";
import styles from "@/styles/group.module.scss";

interface Props {
  children: React.ReactNode[];
}

const _ = ({ children }: Props) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={styles.main}>
      {children.map((child, index) => (
        <div key={"parallax-" + index} className={styles.child}>
          {child}
        </div>
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />
    </div>
  );
};

export default _;
