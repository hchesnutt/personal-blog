import Layout from "../components/Layout";
import styles from "../styles/about.module.scss";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <img src="/images/headshot-avatar.jpg" className={styles.headshot} />
        ALL ABOUT ME!
      </div>
    </Layout>
  );
}
