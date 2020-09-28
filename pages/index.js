import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Henry Chesnutt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
