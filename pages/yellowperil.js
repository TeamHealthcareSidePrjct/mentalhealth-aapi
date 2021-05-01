import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";

import { Row, Col, Overlay, Tooltip } from "react-bootstrap";
import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function PreResults() {
  const [showMe, setShowMe] = useState(true);
  const [rotate, setRotate] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

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
        <h3 style={{ display: rotate ? "none" : "block" }}>tap to flip!</h3>
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
            <Image src="/cardtheyellowperilback.svg" width={333} height={500} />
          </div>
          <div className={styles.flipcardback}>
            <Image
              src="/cardtheyellowperilfront.svg"
              width={333}
              height={500}
            />
          </div>
        </div>
        <div
          style={{
            display: showMe && rotate ? "block" : "none",
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
            <Image
              src="/cardtheyellowperilfront.svg"
              width={333}
              height={500}
            />
          </div>
          <div className="ml-5">
            <Image src="/cardtheyellowperiltext.svg" width={333} height={500} />
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
          <div className="d-flex justify-content-end mx-auto my-auto">
            <div className={styles.socialshare}>
              <div className="d-flex justify-content-center ">
                <div style={{ height: "75px" }} className="mx-2">
                  <Link
                    href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.hyphenated.app"
                    passHref={true}
                  >
                    <div className="mt-4">
                      {" "}
                      <Image src="/facebookshare.png" width={30} height={30} />
                    </div>
                  </Link>
                </div>
                <div style={{ height: "75px" }} className="mx-2">
                  <Link
                    href="https://twitter.com/intent/tweet?url=www.hyphenated.app&text="
                    passHref={true}
                  >
                    <div className="mt-4">
                      {" "}
                      <Image src="/twittershare.png" width={30} height={30} />
                    </div>
                  </Link>
                </div>
                <div style={{ height: "75px" }} className="mx-2">
                  <div
                    className="mt-4"
                    ref={target}
                    onClick={() =>
                      navigator.clipboard.writeText("www.hyphenated.app")
                    }
                  >
                    {" "}
                    <Image
                      onClick={() => setShow(!show)}
                      src="/socialshare.png"
                      width={30}
                      height={30}
                    />
                    <Overlay
                      target={target.current}
                      show={show}
                      placement="bottom"
                    >
                      {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                          Copied!
                        </Tooltip>
                      )}
                    </Overlay>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialshare}>
              <div className="d-flex justify-content-center ">
                <Link
                  href="https://www.notion.so/2f24c8dac5d04847b34520c42174e6b7?v=a7e69cbb048840cf80bb9601cb2fb9f7"
                  passHref={true}
                >
                  <div className="mt-3">
                    <h2>Resources</h2>
                  </div>
                </Link>
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

          <Link href="/categories">
            <div className="pl-5" style={{ cursor: "pointer" }}>
              <h1 className={styles.rightarrow}>&#8594;</h1>
            </div>
          </Link>
        </div>
        <div style={{ height: "80px" }}></div>
        <div>
          <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            <Col>
              <div>
                <h1>Learn More</h1>
                <div className="d-flex">
                  <Link href="https://www.asianmhc.org/" passHref={true}>
                    <div>
                      <Image src="/learnmoreAMHC.svg" width={140} height={80} />
                    </div>
                  </Link>
                  <div className="pl-5">
                    <Link href="https://www.asianmhc.org/" passHref={true}>
                      <p className={styles.resourcestext}>
                        MENTAL HEALTH <br />
                        The Asian Mental Health Collective
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="d-flex">
                  <Link href="https://youtu.be/14WUuya94QE" passHref={true}>
                    <div>
                      <Image src="/learnmoretry.svg" width={140} height={80} />
                    </div>
                  </Link>
                  <div className="pl-5">
                    <Link href="https://youtu.be/14WUuya94QE" passHref={true}>
                      <p className={styles.resourcestext}>
                        #STOPASIANHATE <br />
                        The Try Guys: "Let's Talk About Anti-Asian Hate."
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="d-flex">
                  <Link href="https://www.thechitchaat.com/" passHref={true}>
                    <div>
                      <Image
                        src="/learnmorechitchat.svg"
                        width={140}
                        height={80}
                      />
                    </div>
                  </Link>
                  <div className="pl-5">
                    <Link href="https://www.thechitchaat.com/" passHref={true}>
                      <p className={styles.resourcestext}>
                        REPRESENTATION
                        <br />
                        Chit-Chaat: Culturally Appropriate Holiday Cards
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="d-flex">
                  <Link
                    href="https://www.nytimes.com/interactive/2021/04/08/arts/asian-american-photos-love.html"
                    passHref={true}
                  >
                    <div>
                      <Image src="/learnmoreNYT.svg" width={140} height={80} />
                    </div>
                  </Link>
                  <div className="pl-5">
                    <Link
                      href="https://www.nytimes.com/interactive/2021/04/08/arts/asian-american-photos-love.html"
                      passHref={true}
                    >
                      <p className={styles.resourcestext}>
                        ESSAY <br />
                        The New York Times: Keeping Love Close
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <TwitterTimelineEmbed
                  sourceType="timeline"
                  screenName="HyphenatedApp"
                  theme="dark"
                  options={{ height: 400 }}
                  noHeader
                  noFooter
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
