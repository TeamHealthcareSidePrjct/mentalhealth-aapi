import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import Image from "next/image";
import { Button, Row, Col } from "react-bootstrap";

export default function whatsyaname() {
  return (
    <div className={styles.background}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Cormorant/Cormorant-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Name</title>
      </Head>
      <Navbar />
      <div style={{ marginTop: "200px" }}></div>
      <div className="mt-5 mb-5">
        <Row style={{ marginLeft: "50px" }}>
          <Col>
            <h1 className={styles.homepageheader}>
              Hey, stranger. Thank you for coming.
            </h1>
            <h1 className={styles.homepageheader}>
              If it's alright, we'd love to call you by name.
            </h1>
            <p className={styles.homepageheader}>What's your name?</p>
          </Col>
        </Row>
        <Row style={{ marginLeft: "50px" }}>
          <Col>
            <p className={styles.homepagesubtext}>
              To skip this step, just click on the arrow button.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
