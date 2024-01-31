import styles from "@/styles/Home.module.scss";
// import { getAllPosts } from "@/lib/notion";
// import { useEffect } from "react";

export default function Home() {
  // console.log(posts);
  // useEffect(() => {
  //   const run = async () => {
  //     if (posts) {
  //       localStorage.setItem("posts", JSON.stringify(posts));
  //     }
  //   };

  //   run();
  // }, [posts]);

  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.con}`}>
        <div className={`${styles.sitecon}`}>
          <iframe
            src="https://joinbesocial.com/html/index.html"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
        </div>

        <img src="frame.png" className={` ${styles.frame}`} />
      </div>
      <div className={`${styles.conx}`}>
        <div className={`${styles.siteconx}`}>
          <iframe src="https://joinbesocial.com/html/index.html"></iframe>
        </div>
        <img src="phone.png" className={` ${styles.framex}`} />
      </div>
    </main>
  );
}

// export async function getStaticProps() {
//   const posts = await getAllPosts({ includePages: false });
//   // const posts = {
//   //   name: "dsd",
//   // };

//   return {
//     props: {
//       posts,
//     },
//   };
// }
