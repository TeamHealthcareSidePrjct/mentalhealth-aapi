import Navbar from "../components/nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NameWelcome from "../components/namewelcome";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "../context/state";

export default function Categories() {
  return (
    <div className={styles.gradientbackground}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Cormorant/Cormorant-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Hyphenated</title>
      </Head>
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <div style={{ marginLeft: "50px" }}></div>
    </div>
  );
}
