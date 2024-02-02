import styles from "@/styles/Home.module.scss";
import { getAllPosts } from "@/lib/notion";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import db from "../firebase";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogPosts"));
        const blogList = [];
        querySnapshot.forEach((doc) => {
          blogList.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.con}`}>
        <div className={`${styles.sitecon}`}>
          <iframe
            src="/html/index.html"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
        </div>

        <img src="frame.png" className={` ${styles.frame}`} />
      </div>
      <div className={`${styles.conx}`}>
        <div className={`${styles.siteconx}`}>
          <iframe src="/html/index.html"></iframe>
        </div>
        <img src="phone.png" className={` ${styles.framex}`} />
      </div>
    </main>
  );
}
