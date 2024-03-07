// pages/blog/[id].js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import db from "../../firebase";

export const metadata = {
  title: "Blog | BeSocial",
  description: "Endless Entertainment!",
};

const Blogs = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const querySnapshot = await getDocs(collection(db, "blogPosts"));
      let arr = [];
      let arrDrats = [];
      querySnapshot.forEach((doc) => {
        if (doc.data()?.draft != true) {
          arrDrats.push({ id: doc?.id, ...doc.data() });
        }
      });
      setBlog(arrDrats);
    };

    fetchBlogPost();
  }, [id]);

  // if (!blog) {
  //   return (
  //     <div className="w-screen h-screen flex flex-col justify-center items-center">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-2xl mx-auto my-8 p-8  rounded-md bg-[black]">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
        className="flex flex-row justify-between items-align mb-5"
      >
        <img
          style={{
            width: 50,
            borderRadius: 5,
          }}
          src="/icon.png"
          className="w-10 rounded"
        ></img>

        <strong
          onClick={() => {
            history.back();
          }}
          className="cursor-pointer"
        >
          Go Back
        </strong>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-[white]">Our Blogs</h1>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
        {blog?.map((x, i) => {
          return (
            <a
              href={"/blogs/" + x?.id}
              key={i}
              className="col-span-1 cursor-pointer"
            >
              <div
                className="h-[220px] bg-[gray] rounded-md"
                style={{
                  backgroundImage: `url(${x?.imageUrl})`,
                  // backgroundPosition: "0 -60px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />

              <div className="flex flex-col my-2 mb-5">
                <text className="text-base">{x?.title}</text>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
