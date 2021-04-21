import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import Image from "next/image";
import { Button, Row, Col } from "react-bootstrap";

export default function lovelyToMeetYou() {
  return (
    <div className={styles.background}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Cormorant/Cormorant-Regular.ttf"
          as="font"
          crossOrigin=""
        ></link>
        <title>Name</title>
      </Head>
      <Navbar />
      <div style={{ marginTop: "200px" }}></div>
      <div className="mt-5 mb-5">
        <Row style={{ marginLeft: "50px" }}>
          <Col>
            <h1 className={styles.homepageheader}></h1>
            <p className={styles.homepageheader}>
              What would you like to explore?
            </p>
          </Col>
        </Row>
        <Row style={{ marginLeft: "50px" }}>
          <Col></Col>
        </Row>
        <Row className="mt-5">
          <Col className={styles.cards1}>
            <Image src="/The_Wheel_of_Shame.png" width={300} height={541} />
          </Col>
          <Col className={styles.cards2}>
            <Image src="/The_Model_Minority.png" width={300} height={518} />
          </Col>
          <Col className={styles.cards3}>
            <Image src="/The_Foreigner.png" width={300} height={520} />
          </Col>
          <Col className={styles.cards4}>
            <Image src="/The_Yellow_Peril.png" width={300} height={525} />
          </Col>
          <Col className={styles.cards5}>
            <Image src="/The_Great_Expectation.png" width={300} height={534} />
          </Col>
          <Col className={styles.cards6}>
            <Image src="/The_Iron_Woman.png" width={300} height={534} />
          </Col>
          <Col className={styles.cards7}>
            <Image src="/The_Unplanned_Card.png" width={300} height={518} />
          </Col>
        </Row>
      </div>
      ;
    </div>
  );
}
