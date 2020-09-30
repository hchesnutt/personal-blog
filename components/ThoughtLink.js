import Link from "next/link";

import styles from "../styles/thoughtLink.module.scss";

export default function ThoughtLink({ thought: { title, slug, createdAt } }) {
  return (
    <div className={styles.container}>
      <Link href={`/thoughts/${slug}`}>
        <div className={styles.title}>{title}</div>
      </Link>
      <div className={styles.date}>{createdAt}</div>
    </div>
  );
}
