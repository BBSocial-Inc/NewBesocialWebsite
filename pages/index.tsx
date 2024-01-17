import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.con}`}>
        <div className={`${styles.sitecon}`}>
          {/* <iframe src="your-webflow-link" width="600" height="400" frameborder="0" ></iframe> */}

          <iframe
            src="https://playful-entremet-0cc1f7.netlify.app//html/index.html"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
        </div>
        <img src="frame.png" className={` ${styles.frame}`} />
      </div>
      <div className={`${styles.conx}`}>
        <div className={`${styles.siteconx}`}>
          <iframe src="https://playful-entremet-0cc1f7.netlify.app//html/index.html"></iframe>
        </div>
        <img src="phone.png" className={` ${styles.framex}`} />
      </div>
    </main>
  );
}
