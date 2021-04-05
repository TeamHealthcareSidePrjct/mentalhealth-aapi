import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import Image from "next/image";
import { Button, Row, Col } from "react-bootstrap";

export default function Home() {
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
            <h1 className={styles.homepageheader}>
              It's time to reclaim the Asian American experience.
            </h1>
            <p className={styles.homepagesubtext}>
              We created a tarot-inspired card deck to shed light on Asian
              American and Pacific Islander experiences. AAPI folks and allies,
              we welcome you to learn more in this safe space.
            </p>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src="/rectangle.png" width={200} height={290} />
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "300px" }}></div>
      <div className="mt-5 mb-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <h3>get started</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className="mx-auto">&#8595;</h1>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={{ marginLeft: "50px" }}>
          <Col>
            <h1>How to use our cards:</h1>
          </Col>
        </Row>
      </div>
      <span></span>
      <div>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <Image src="/square.png" width={200} height={200} />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src="/square.png" width={200} height={200} />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src="/square.png" width={200} height={200} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <Image src="/ellipse.png" width={77} height={75} />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src="/ellipse.png" width={77} height={75} />
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src="/ellipse.png" width={77} height={75} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <p>Pick a topic</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <p>Ready your card</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <p>Check out our resources</p>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "175px" }}></div>
      <div className="mt-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <Button variant="light">begin</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
