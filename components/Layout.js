import Navigation from "../components/Navigation";

import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
