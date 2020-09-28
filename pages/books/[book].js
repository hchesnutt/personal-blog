import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout";

export default function Book({ MarkdownX }) {
  const router = useRouter();
  return (
    <Layout>
      <Link href="/books">
        <a>{"< Back"}</a>
      </Link>
      <MarkdownX />
    </Layout>
  );
}

Book.getInitialProps = async function (context) {
  const { book: bookName } = context.query;
  console.log(bookName);
  const MarkdownX = dynamic(() => import(`../../markdown/books/${bookName}`));
  console.log(MarkdownX);
  return {
    MarkdownX,
  };
};
