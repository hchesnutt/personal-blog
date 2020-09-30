import Link from "next/link";
import styles from "../styles/bookLink.module.scss";

export default function BookLink({
  book: { title, slug, author, createdAt, stars },
}) {
  return (
    <div className={styles.container}>
      <Link href={`/books/${slug}`}>
        <div className={styles.leftContent}>
          <div className={styles.title}>{title}</div>
          <div>{author}</div>
        </div>
      </Link>
      <div className={styles.rightContent}>
        <div className={styles.stars}>
          {[...Array(stars).keys()].map((i) => (
            <span key={`${slug}_stars_${i}`}>&#9733;</span>
          ))}
        </div>
        <div className={styles.date}>{createdAt}</div>
      </div>
    </div>
  );
}
