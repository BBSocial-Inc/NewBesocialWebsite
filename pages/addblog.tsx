// pages/add-post.js
import { useEffect, useRef, useState } from "react";

import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
// import Editor from "@/components/Editor";
import { Editor } from "@tinymce/tinymce-react";

import db from "../firebase";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [post, setPost] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImage2, setCoverImage2] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  const [loading, setloading] = useState(false);
  const [loadingimg, setloadingimg] = useState(false);
  const [tabs, settabs] = useState("blogs");
  const [blogs, setblogs] = useState([]);
  const [uploads, setuploads] = useState([]);
  const storage = getStorage();

  useEffect(() => {
    const run = async () => {
      const querySnapshot = await getDocs(collection(db, "blogPosts"));
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ id: doc?.id, ...doc.data() });
      });
      setblogs(arr);

      const listRef = ref(storage, "images");

      let arrUps = [];

      listAll(listRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {
            // All the items under listRef.
            getDownloadURL(ref(storage, itemRef.fullPath))
              .then((url) => {
                arrUps.push(url);
              })
              .catch((error) => {
                // Handle any errors
              });
          });
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
      setuploads(arrUps);
    };

    run();
  }, []);

  // const editorRef = useRef(null);
  const editorRef = useRef(null);
  const log = () => {
    console.log(editorRef.current.getContent());
    return editorRef.current.getContent();
  };

  const handleImageUpload = async () => {
    const storageRef = ref(storage, `images/${coverImage.name}`);

    await uploadBytes(storageRef, coverImage);

    const url = await getDownloadURL(storageRef);
    setImageUrl(url);
    setloadingimg(false);
  };
  const handleImageUpload2 = async () => {
    const storageRef = ref(storage, `images/${coverImage2.name}`);

    await uploadBytes(storageRef, coverImage2);

    const url = await getDownloadURL(storageRef);
    setImageUrl2(url);
    setloadingimg(false);
  };

  const handleDelete = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, "blogPosts", id))
      .then(() => {
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const run = async () => {
      if (coverImage) {
        setloadingimg(true);
        await handleImageUpload();
      }
    };
    run();
  }, [coverImage]);

  useEffect(() => {
    const run = async () => {
      if (coverImage2) {
        setloadingimg(true);
        await handleImageUpload2();
      }
    };
    run();
  }, [coverImage2]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setloading(true);

    let p = await log();
    setPost(p);

    if (imageUrl && p) {
      try {
        const blogPostData = {
          title,
          summary,
          post: await log(),
          author,
          imageUrl,
          // Add additional fields as needed
        };

        const docRef = await addDoc(collection(db, "blogPosts"), blogPostData);

        console.log("Blog post added with ID:", docRef.id);

        // Reset form fields after successful submission
        setTitle("");
        setSummary("");
        setPost("");
        setAuthor("");
        setCoverImage(null);
        setImageUrl(null);

        setloading(false);
        alert("Post Published");
        location.reload();
      } catch (error) {
        setloading(false);
        console.error("Error adding blog post: ", error);
        alert("Error publishing post, Try again");
      }
    } else {
      console.error("Error uploading image");
      alert("Error publishing post, Try again");
      setloading(false);
    }
  };

  const [password, setPassword] = useState("Admin@Besocial");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [auth, setauth] = useState(true);

  const handleLogin = () => {
    if (enteredPassword === password) {
      // Password is correct, proceed to render content
      setauth(false);
    } else {
      alert("Incorrect password");
    }
  };

  if (auth) {
    return (
      <div
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/6593e19d1d741bf69d8caed3/6594524f3c5db5bf0eb26415_Group%204296.png)",
          // backgroundPosition: "0 -60px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-screen flex flex-col justify-center items-center"
      >
        <h1 className="mb-3">Login to access blog</h1>
        <input
          className="text-[black] bg-[white] border-[black] border rounded w-[300px] h-[45px] px-3"
          type="password"
          placeholder="Enter password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
        <button
          className="text-[black] bg-[white] border-[black] border rounded w-[300px] h-[45px] px-3 mt-3"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex bg-[white]">
      <div className="w-1/4 border-r border-gray-200 p-4">
        <div className="flex flex-row items-center mb-5">
          <img
            style={{
              width: 50,
              borderRadius: 5,
            }}
            src="/icon.png"
            className="w-10 rounded"
          ></img>
          <h1 className="text-xl font-bold ml-2 text-left text-gray-800">
            Blog CMS
          </h1>
        </div>
        <div className="flex flex-row items-center mb-5">
          <strong
            onClick={() => {
              settabs("blogs");
            }}
            className={`text-[${
              tabs === "blogs" ? "black" : "gray"
            }] cursor-pointer mr-3`}
          >
            Blogs
          </strong>
          <strong
            onClick={() => {
              settabs("uploads");
            }}
            className={`text-[${
              tabs === "uploads" ? "black" : "gray"
            }] cursor-pointer mr-3`}
          >
            Uploads
          </strong>
        </div>
        {tabs == "blogs" ? (
          blogs?.map((x, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-start w-full bg-[#eee] rounded-lg p-2 mb-2"
              >
                <div className="flex mb-1">
                  <img
                    src={x?.imageUrl}
                    className="w-[50px] h-[50px] bg-[white] rounded"
                  />
                  <p className="ml-3 leading-4 text-black">{x?.title}</p>
                </div>

                <div className="flex">
                  <strong
                    onClick={() => {
                      handleDelete(x?.id);
                    }}
                    className="text-sm text-[red] cursor-pointer mr-2"
                  >
                    Delete
                  </strong>

                  {/* <strong className="text-sm text-[gray] cursor-pointer">
                  Edit
                </strong> */}
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <div className="mb-3 flex items-center justify-center w-full h-40 bg-gray-100 border-dashed border-2 border-gray-300 rounded-md">
              {imageUrl2 ? (
                <img
                  src={URL.createObjectURL(coverImage2)}
                  alt="Cover"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <label htmlFor="coverImage" className="cursor-pointer">
                  <span className="text-blue-500">
                    {loadingimg ? "loading" : "Click to upload a cover image"}
                  </span>
                </label>
              )}
              <input
                type="file"
                id="coverImage"
                className="hidden"
                accept="image/*"
                onChange={(e) => setCoverImage2(e.target.files[0])}
              />
            </div>
            <div className="flex flex-row flex-wrap ">
              {uploads?.map((x, i) => {
                return (
                  <img
                    style={{
                      objectFit: "cover",
                    }}
                    src={x}
                    key={i}
                    className="w-[45%] h-[130px] bg-[#eee] mr-1 mb-1 rounded"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Pane */}
      <div className="w-3/4 p-4">
        <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-md">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Cover Image:
            </label>
            <div className="flex items-center justify-center w-full h-40 bg-gray-100 border-dashed border-2 border-gray-300 rounded-md">
              {imageUrl ? (
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Cover"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <label htmlFor="coverImage" className="cursor-pointer">
                  <span className="text-blue-500">
                    {loadingimg ? "loading" : "Click to upload a cover image"}
                  </span>
                </label>
              )}
              <input
                type="file"
                id="coverImage"
                className="hidden"
                accept="image/*"
                onChange={(e) => setCoverImage(e.target.files[0])}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Title:
              </label>
              <input
                type="text"
                className=" text-[black] w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the title..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Summary:
              </label>
              <textarea
                className=" text-[black] w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Write a brief summary..."
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Author:
              </label>
              <input
                type="text"
                className=" text-[black] w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Your name..."
              />
            </div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Post:
            </label>

            <Editor
              apiKey="xlpvjgo9430owcv8o0nfwibctxhrj7fk9oaiikha8232c3py"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                plugins:
                  "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "BeSocial",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant")
                  ),
              }}
              initialValue="Your blog post here"
            />
            {/* <button onClick={log}>Log editor content</button> */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              {loading ? "Publishing" : "Publish"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
