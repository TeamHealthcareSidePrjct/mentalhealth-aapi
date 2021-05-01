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
      <div style={{ marginLeft: "50px" }}>
        <span>
          <h1>What would you like to explore?</h1>
        </span>
        <div style={{ height: "80px" }}></div>
        <div className="d-flex justify-content-center">
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/modelminority">
              <Image
                src="/cardmodelminorityback.svg"
                width={160}
                height={240}
              />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/greatexpectation">
              <Image
                src="/cardthegreatexpectationback.svg"
                width={160}
                height={240}
              />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/wheelofshame">
              <Image src="/cardwheelofshameback.svg" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/foreigner">
              <Image src="/cardforeignerback.svg" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/yellowperil">
              <Image
                src="/cardtheyellowperilback.svg"
                width={160}
                height={240}
              />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/ironwoman">
              <Image src="/cardtheironwomanback.svg" width={160} height={240} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
