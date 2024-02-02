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
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.summary}</p>
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt="Blog Cover"
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
      )}
      <div
        className="text-gray-800"
        dangerouslySetInnerHTML={{ __html: blog.post }}
      />
    </div>
  );
};

export default BlogPost;
