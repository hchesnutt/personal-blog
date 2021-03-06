import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import LeftNavLayout from "../../components/LeftNavLayout";

import styles from "../../styles/[book].module.scss";

export default function Book({ MarkdownX }) {
  const router = useRouter();
  return (
    <LeftNavLayout>
      <Link href="/books">
        <div className={styles.backArrow}>{"< Back"}</div>
      </Link>
      <MarkdownX />
    </LeftNavLayout>
  );
}

Book.getInitialProps = async function (context) {
  const { book: slug } = context.query;
  const MarkdownX = dynamic(() => import(`../../markdown/books/${slug}.mdx`));
  return {
    MarkdownX,
  };
};
