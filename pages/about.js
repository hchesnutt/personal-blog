import LeftNavLayout from "../components/LeftNavLayout";
import styles from "../styles/about.module.scss";

export default function About() {
  return (
    <LeftNavLayout>
      <div className={styles.container}>
        <img src="/images/headshot-avatar.jpg" className={styles.headshot} />
        ALL ABOUT ME!
      </div>
    </LeftNavLayout>
  );
}
