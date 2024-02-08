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
          alt={blog.title}
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
      <h1 className="text-4xl font-bold mb-4 text-[white]">{blog.title}</h1>
      <p
        style={{
          marginBottom: 10,
        }}
        className="text-[gray] mb-2"
      >
        <i>{blog.summary}</i>
      </p>
      <p
        style={{
          marginBottom: 20,
        }}
        className="text-[gray] mb-5 text-sm"
      >
        By: {blog?.author}
      </p>
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt="Blog Cover"
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
      )}
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: `<main><style>
          h1 {
            font-weight: bold;
            margin-bottom: 20px;
          }
          
          h2,h3 {
            margin-bottom: 10px;
            font-weight: bold
          }
          h1 {
            font-size: 2em;
          }
          
          h2 {
            font-size: 1.5em;
          }
          
          h3 {
            font-size: 1.2em;
          }
          
          p {
            margin-bottom: 20px;
          }
          
          img {
            max-width: 100%;
            height: auto;
          }
          
          ul, ol {
            padding-left: 40px;
            margin-bottom: 20px;
          }
          
          li {
            margin-bottom: 10px;
          }

          ul {
            list-style-type: disc;
          }
          
          ol {
            list-style-type: decimal;
          }
          
          blockquote {
            margin: 0;
            padding: 10px;
            background-color: #ecf0f1;
            border-left: 4px solid #3498db;
          }
          
          a {
            color: #3498db;
            text-decoration: none;
          }
          
          a:hover {
            text-decoration: underline;
          }
          </style> ${blog.post}</main>`,
        }}
      />
    </div>
  );
};

export default BlogPost;
