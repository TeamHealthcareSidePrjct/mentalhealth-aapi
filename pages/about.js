import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/nav";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.aboutwrap}>
      <div className={styles.aboutbackground}>
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
        <div className={styles.aboutfooter}>
          <div
            className="d-flex justify-content-between"
            style={{ paddingLeft: "50px" }}
          >
            <div>
              <Link href="mailto:teamhealthcaresideprjct@gmail.com">
                <p className={styles.footertext}>
                  Wanna get involved?
                  <br />
                  Contact us &#38; follow our socials.
                </p>
              </Link>
              <Link href="mailto:teamhealthcaresideprjct@gmail.com">
                <p className={styles.footertext}>Email</p>
              </Link>
              <Link href="https://twitter.com/HyphenatedApp" passHref={true}>
                <p className={styles.footertext}>Twitter</p>
              </Link>
            </div>
            <div style={{ paddingRight: "40px" }}>
              <Link href="/about">
                <p className={styles.footertext}>About</p>
              </Link>
              <Link
                href="https://www.notion.so/2f24c8dac5d04847b34520c42174e6b7?v=a7e69cbb048840cf80bb9601cb2fb9f7"
                passHref={true}
              >
                <p className={styles.footertext}>Resources</p>
              </Link>
              <br />
              <p className={styles.footertext}>&#169; 2021 Hyphenated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
