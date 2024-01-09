import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.con}`}>
        <div className={`${styles.sitecon}`}>
          <iframe src="http://www.bbc.com"></iframe>
        </div>
        <img src="frame.png" className={` ${styles.frame}`} />
      </div>
    </main>
  );
}
