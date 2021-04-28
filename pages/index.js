import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <div className={styles.background}>
        <Head>
          <link
            rel="preload"
            href="/fonts/Cormorant/Cormorant-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <title>hyphenated</title>
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
                American and Pacific Islander experiences. AAPI folks and
                allies, we welcome you to the quest to learn more in this safe
                space.
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <div>
                <div style={{ position: "absolute" }}>
                  <Image
                    src="/indexcard2.png"
                    width={200}
                    height={300}
                    style={{ position: "absolute" }}
                  />
                </div>
                <div style={{ position: "absolute" }}>
                  <Image src="/indexcard1.png" width={200} height={300} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "200px" }}></div>
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
              <h1>Quest Instructions</h1>
            </Col>
          </Row>
        </div>
        <span></span>
        <div>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
              <p className={styles.abovecardtext}>Pick a topic</p>
            </Col>
            <Col className="d-flex justify-content-center">
              <p className={styles.abovecardtext}>Flip your card</p>
            </Col>
            <Col className="d-flex justify-content-center">
              <p className={styles.abovecardtext}>
                Reveal your reading &amp;
                <br />
                share the experience!
              </p>
            </Col>
          </Row>
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
        </div>
        <div style={{ marginTop: "175px" }}></div>
        <div style={{ cursor: "pointer" }}>
          <Row>
            <Col className="d-flex justify-content-center">
              <Link href="/onboarding">
                <Image src="/beginbutton.png" width={108} height={108} />
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.footer}>
        <p style={{ float: "right" }} className="mr-5">
          &#169; 2021 Hyphenated
        </p>
      </div>
    </div>
  );
}
