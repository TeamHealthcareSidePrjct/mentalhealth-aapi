import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";

export default function Home() {
  return (
    <div className={styles.background}>
      <Head>
        <title>Healthcare Mental Health AAPI</title>
      </Head>
      <Navbar />
    </div>
  );
}
