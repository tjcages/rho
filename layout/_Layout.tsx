import styles from "@/styles/layout.module.scss";

interface Props {
  nav: React.ReactNode;
  content: React.ReactNode;
}

const _ = ({ nav, content }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>{nav}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default _;
