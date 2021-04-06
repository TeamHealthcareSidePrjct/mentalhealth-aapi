import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import Image from "next/image";
import { Button, Row, Col } from "react-bootstrap";

export default function contact() {
  return (
    <div className={styles.background}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Cormorant/Cormorant-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Healthcare Mental Health AAPI</title>
      </Head>
      <Navbar />
      <div style={{ marginTop: "200px" }}></div>
      <div className="mt-5 mb-5">
        <Row style={{ marginLeft: "50px" }}>
          <Col>
            <h1 className={styles.homepageheader}>Hey There, Reach Out!</h1>
            <p className={styles.homepagesubtext}>
              Please feel free to reach out to us with feedback, suggestions,
              experiences, etc. We're here for you and we want to help.
            </p>
            <p className={styles.homepagesubtext}>
              Check us out on Twitter @mentalhealthaapi
            </p>
            <p className={styles.homepagesubtext}>
              Email us too @mentalhealthaapi@gmail.com
            </p>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src="/rectangle.png" width={200} height={290} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
