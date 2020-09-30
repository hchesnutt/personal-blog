import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/navigation.module.scss";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default function Navigation() {
  const { pathname } = useRouter();
  const pages = ["thoughts", "books", "about"];

  const renderName = (name) =>
    `${toTitleCase(name)} ${RegExp(`^/${name}`).test(pathname) ? "⬅" : ""}`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>Henry Chesnutt</div>
      {pages.map((name) => (
        <Link href={`/${name}`} key={name + "_navigation"}>
          <div className={styles.navItem}>{renderName(name)}</div>
        </Link>
      ))}
    </div>
  );
}
