import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import Image from "next/image";
import { Button, Row, Col } from "react-bootstrap";

export default function about() {
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
            <h1 className={styles.homepageheader}>Welcome, meet the team!</h1>
            <p className={styles.homepagesubtext}>
              We created a tarot-inspired card deck to shed light on Asian
              American and Pacific Islander experiences. AAPI folks and allies,
              we welcome you to learn more in this safe space.
            </p>
            <p className={styles.homepagesubtext}>
              This web was designed, created, and brought to life by. Jiwon Lee,
              Sunny Liu, Kween Karrielene, Rudy Becker, and Sam Samskies.
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
