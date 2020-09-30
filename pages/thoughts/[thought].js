import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import LeftNavLayout from "../../components/LeftNavLayout";

import styles from "../../styles/[thought].module.scss";

export default function Thought({ MarkdownX }) {
  const router = useRouter();
  return (
    <LeftNavLayout>
      <Link href="/thoughts">
        <div className={styles.backArrow}>{"< Back"}</div>
      </Link>
      <MarkdownX />
    </LeftNavLayout>
  );
}

Thought.getInitialProps = async function (context) {
  const { thought: slug } = context.query;
  const MarkdownX = dynamic(() =>
    import(`../../markdown/thoughts/${slug}.mdx`)
  );

  return {
    MarkdownX,
  };
};
