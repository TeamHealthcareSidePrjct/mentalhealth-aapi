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
        <div style={{ marginTop: "100px" }}></div>
        <div className="mt-5 mb-5">
          <Row style={{ paddingLeft: "50px" }}>
            <Col>
              <br />

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
                <Image src="/cardsethomepage.svg" width={280} height={333} />
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "150px" }}></div>
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
          <Row style={{ paddingLeft: "50px" }}>
            <Col>
              <h2>Quest Instructions</h2>
            </Col>
          </Row>
        </div>
        <span></span>
        <div>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
              <Image src="/01.svg" width={189} height={48} />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image src="/02.svg" width={236} height={48} />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image src="/03.svg" width={342} height={61} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
              <Image src="/cardmodelminority.svg" width={200} height={133.33} />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image src="/cardquestionmark.svg" width={200} height={133.33} />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image
                src="/cardbackandwand.svg"
                width={226}
                height={224.43}
                style={{ background: "transparent" }}
              />
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
        <Row>
          <Col>
            <div className="pl-4">
              <Link href="mailto:hyphenated.team@gmail.com">
                <p className={styles.pointercursor}>
                  Contact us <br />
                  hyphenated.team@gmail.com
                </p>
              </Link>
            </div>
          </Col>
          <Col>
            <span
              style={{
                fontFamily: "Cormorant",
                color: "white",
              }}
            >
              Follow us
            </span>
            <br />{" "}
            <Image
              src="/icontwitter.svg"
              width={24}
              height={24}
              className={styles.pointercursor}
            />
          </Col>
          <Col className={styles.pointercursor}>
            <Link href="/onboarding">
              <p>Resources</p>
            </Link>
          </Col>
          <p className="pr-5">&#169; 2021 Hyphenated</p>
        </Row>
      </div>
    </div>
  );
}
