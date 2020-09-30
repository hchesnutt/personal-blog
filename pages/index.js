import Head from "next/head";
import LeftNavLayout from "../components/LeftNavLayout";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <LeftNavLayout>
      <Head>
        <title>Henry Chesnutt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </LeftNavLayout>
  );
}
