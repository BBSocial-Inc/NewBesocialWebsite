// pages/blog/[id].js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import db from "../../firebase";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (id) {
        const docRef = doc(db, "blogPosts", id);
        const blogDoc = await getDoc(docRef);

        if (blogDoc.exists()) {
          setBlog({ id: blogDoc.id, ...blogDoc.data() });
        } else {
          console.error("Blog post not found");
        }
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!blog) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 shadow-md rounded-md bg-[black]">
      <div className="flex flex-row justify-between items-align mb-5">
        <img src="/icon.png" className="w-10 rounded" alt={blog.title}></img>

        <strong
          onClick={() => {
            history.back();
          }}
          className="cursor-pointer"
        >
          Go Back
        </strong>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-[white]">{blog.title}</h1>
      <p className="text-[gray] mb-2">
        <i>{blog.summary}</i>
      </p>
      <p className="text-[gray] mb-5 text-sm">By: {blog?.author}</p>
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt="Blog Cover"
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
      )}
      <div
        className="text-[white]"
        dangerouslySetInnerHTML={{ __html: blog.post }}
      />
    </div>
  );
};

export default BlogPost;
