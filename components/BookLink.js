import Link from "next/link";
import styles from "../styles/bookLink.module.scss";

export default function BookLink({
  book: { title, fileName, author, dateRead },
}) {
  return (
    <div className={styles.container}>
      <Link href={`/books/${fileName}`}>
        <div className={styles.title}>{`${title} - ${author}`}</div>
      </Link>
      <div className={styles.date}>{dateRead}</div>
    </div>
  );
}
