import Layout from "../../components/Layout";
import styles from "../../styles/books.module.scss";
import BookLink from "../../components/BookLink";

export default function Books({ books }) {
  console.log(books);
  return (
    <Layout>
      <div className={styles.container}>
        {books.map((book) => (
          <BookLink book={book} />
        ))}
      </div>
    </Layout>
  );
}

Books.getInitialProps = async () => {
  const data = await fetch("http://localhost:3000/api/books");
  const books = await data.json();
  return {
    books,
  };
};
