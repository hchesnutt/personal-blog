import LeftNavLayout from "../../components/LeftNavLayout";
import styles from "../../styles/books.module.scss";
import BookLink from "../../components/BookLink";

export default function Books({ books }) {
  return (
    <LeftNavLayout>
      <div className={styles.container}>
        {books.map((book) => (
          <BookLink book={book} />
        ))}
      </div>
    </LeftNavLayout>
  );
}

Books.getInitialProps = async () => {
  const data = await fetch("http://localhost:3000/api/books");
  const books = await data.json();
  return {
    books,
  };
};
