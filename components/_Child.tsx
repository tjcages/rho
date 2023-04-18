import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Balancer from "react-wrap-balancer";
import styles from "@/styles/child.module.scss";
import { Section } from "@/layout";
import { DataProps } from "@/data";

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

const _ = ({
  title,
  subtitle,
  header,
  description,
  graphic,
  setSelected,
}: DataProps & { setSelected: (id: string) => void }) => {
  return (
    <Section
      id={title}
      content={
        <div className={styles.content}>
          <strong>
            {subtitle} {title}
          </strong>
          {header && (
            <h3>
              <Balancer>{header}</Balancer>
            </h3>
          )}
          {description && (
            <motion.p variants={variants}>{description}</motion.p>
          )}
        </div>
      }
      graphic={
        <div className={styles.graphic}>
          <Image
            priority
            src={"/img/graphics/" + graphic}
            alt={title + " graphic"}
            width={1200}
            height={1200}
          />
        </div>
      }
      onEnter={(id) => {
        setSelected(id);
      }}
    ></Section>
  );
};

export default _;
