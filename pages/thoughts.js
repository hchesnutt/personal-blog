import Layout from "../components/Layout";
import styles from "../styles/thoughts.module.scss";

export default function Thoughts() {
  return (
    <Layout>
      <div className={styles.container}>
        {new Array(10).fill(0).map(() => (
          <div>lots of thoughts!</div>
        ))}
      </div>
    </Layout>
  );
}
