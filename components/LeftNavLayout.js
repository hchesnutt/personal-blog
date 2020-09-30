import Navigation from "./Navigation";

import styles from "../styles/leftNavLayout.module.scss";

export default function LeftNavLayout({ children }) {
  return (
    <div className={styles.LeftNavLayout}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
