import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function PreResults() {
  const [showMe, setShowMe] = useState(true);
  const [rotate, setRotate] = useState(false);

  return (
    <div className={styles.gradientbackground}>
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
      <div style={{ marginLeft: "50px" }}></div>
      <div style={{ height: "60px" }}></div>
      <div
        style={{ textAlign: "center", display: showMe ? "block" : "none" }}
        className="pb-2"
      >
        <h3>tap to flip!</h3>
      </div>
      <div>
        <div
          style={{
            display: showMe ? "block" : "none",
            transform: rotate ? "rotateY(180deg) translateZ(1px)" : "none",
          }}
          className={styles.flipcardinner}
          onClick={() => setRotate(!rotate)}
        >
          <div className={styles.flipcardfront}>
            <Image src="/the_foreigner.png" width={333} height={500} />
          </div>
          <div className={styles.flipcardback}>
            <Image src="/blankcard.png" width={333} height={500} />
          </div>
        </div>
        <div
          style={{
            display: showMe ? "block" : "none",
            float: "right",
            height: "500px",
          }}
        >
          <div style={{ marginRight: "400px" }}>
            <div style={{ height: "200px" }}></div>
            <Image
              src="/wand.png"
              width={100}
              height={100}
              onClick={() => setShowMe(!showMe)}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: showMe ? "none" : "block",
        }}
      >
        <div className="d-flex justify-content-center">
          <div className="mr-5">
            <Image src="/the_foreigner.png" width={333} height={500} />
          </div>
          <div className="ml-5">
            <Image src="/blankcard.png" width={333} height={500} />
          </div>
          <div className="my-auto ml-5">
            <Image
              src="/wand.png"
              width={100}
              height={100}
              onClick={() => setShowMe(!showMe)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="mx-auto my-auto">
            <div className={styles.socialshare}>
              <div className="d-flex justify-content-center ">
                <div style={{ height: "75px" }} className="mx-2">
                  <div className="mt-4">
                    {" "}
                    <Image src="/facebookshare.png" width={30} height={30} />
                  </div>
                </div>
                <div style={{ height: "75px" }} className="mx-2">
                  <div className="mt-4">
                    {" "}
                    <Image src="/twittershare.png" width={30} height={30} />
                  </div>
                </div>
                <div style={{ height: "75px" }} className="mx-2">
                  <div className="mt-4">
                    {" "}
                    <Image src="/socialshare.png" width={30} height={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-auto">
            <h4>
              Continue
              <br />
              exploring!
            </h4>
          </div>
          <Link href="/onboarding">
            <div className="pl-5" style={{ cursor: "pointer" }}>
              <h1 className={styles.rightarrow}>&#8594;</h1>
            </div>
          </Link>
        </div>
        <div style={{ height: "80px" }}></div>
        <div>
          <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            <Col>
              <h1>Learn More</h1>
              <div className="d-flex">
                <div>
                  <Image src="/learnmoresquare.png" width={140} height={80} />
                </div>
                <div className="pl-5">
                  <p className={styles.resourcestext}>
                    MENTAL HEALTH <br />
                    The Asian Mental Health Collective
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <Image src="/learnmoresquare.png" width={140} height={80} />
                </div>
                <div className="pl-5">
                  <p className={styles.resourcestext}>
                    MENTAL HEALTH <br />
                    The Asian Mental Health Collective
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <Image src="/learnmoresquare.png" width={140} height={80} />
                </div>
                <div className="pl-5">
                  <p className={styles.resourcestext}>
                    MENTAL HEALTH <br />
                    The Asian Mental Health Collective
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <Image src="/learnmoresquare.png" width={140} height={80} />
                </div>
                <div className="pl-5">
                  <p className={styles.resourcestext}>
                    MENTAL HEALTH <br />
                    The Asian Mental Health Collective
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <TwitterTimelineEmbed
                  sourceType="timeline"
                  screenName="_RudyBecker_"
                  theme="dark"
                  options={{ height: 400 }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
