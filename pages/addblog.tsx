// pages/add-post.js
import { useState } from "react";

import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import db from "../firebase";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [post, setPost] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setloading] = useState(false);

  const handleImageUpload = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${coverImage.name}`);

    await uploadBytes(storageRef, coverImage);

    const url = await getDownloadURL(storageRef);
    setImageUrl(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    if (coverImage) {
      await handleImageUpload();
    }

    try {
      const blogPostData = {
        title,
        summary,
        post,
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
    } catch (error) {
      setloading(false);
      console.error("Error adding blog post: ", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Add Blog Post
      </h1>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Cover Image:
        </label>
        <div className="flex items-center justify-center w-full h-40 bg-gray-100 border-dashed border-2 border-gray-300 rounded-md">
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt="Cover"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <label htmlFor="coverImage" className="cursor-pointer">
              <span className="text-blue-500">
                Click to upload a cover image
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
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
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
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Write a brief summary..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Post:
          </label>
          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Compose your blog post..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Author:
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {loading ? "Loading" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
