import Navbar from "../components/nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Onboarding() {
  const [name, setName] = useState("");
  const [hide, setHide] = useState(true);

  function toggle() {
    setHide(!hide);
  }
  return (
    <div className={styles.onboardinggradientbackground}>
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
      <div style={{ height: "100px" }} id="top"></div>
      <div style={{ marginLeft: "50px", display: hide ? "block" : "none" }}>
        <Row>
          <h1>
            Hey, traveler. Thank you for coming today.
            <br />
            Remain a stranger or share your name, it's up to you.
          </h1>
        </Row>
        <div style={{ height: "160px" }}></div>
        <Row>
          <div className="mx-auto">
            <input
              type="text"
              id="name"
              name="firstname"
              className={styles.input}
              placeholder="What's your name?"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </Row>
        <div style={{ height: "160px" }}></div>
        <div className="d-flex justify-content-end">
          <div className="my-auto">
            <h4>
              Don't worry, this info isnt stored! <br /> To skip, just click on
              the arrow button.
            </h4>
          </div>
          <div
            className="pl-5"
            style={{ cursor: "pointer" }}
            onClick={() => setHide(!hide)}
          >
            <h1 className={styles.rightarrow}>&#8594;</h1>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "50px", display: hide ? "none" : "block" }}>
        <span>
          <h1>It's lovely to meet you, {name}.</h1>
        </span>
        <span>
          <h2>What would you like to explore?</h2>
        </span>
        <div style={{ height: "80px" }}></div>
        <div className="d-flex justify-content-center">
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/results">
              <Image src="/blankcard.png" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/results">
              <Image src="/blankcard.png" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/results">
              <Image src="/blankcard.png" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/results">
              <Image src="/blankcard.png" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/results">
              <Image src="/blankcard.png" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/results">
              <Image src="/blankcard.png" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/results">
              <Image src="/blankcard.png" width={160} height={240} />
            </Link>
          </div>
          <div
            className={styles.zoom}
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Link href="/results">
              <Image src="/blankcard.png" width={160} height={240} />
            </Link>
          </div>
        </div>
        <div style={{ height: "30px" }}></div>
        <div
          className="pl-5"
          style={{ cursor: "pointer" }}
          onClick={() => setHide(!hide)}
        >
          <h1 href="#top" className={styles.rightarrow}>
            &#8592;
          </h1>
        </div>
      </div>
    </div>
  );
}
