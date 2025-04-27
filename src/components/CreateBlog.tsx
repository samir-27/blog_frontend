import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type BlogFormData = {
  title: string;
  content: string;
  image: File | null;
  category: string;
};

const categories = [
  "Technology",
  "Travel",
  "Food",
  "Lifestyle",
  "Education",
  "Health",
  "Finance",
  "Productivity",
];

const CreateBlog = () => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    content: "",
    image: null,
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (formData.image) {
        const imageFormData = new FormData();
        imageFormData.append("file", formData.image);
        imageFormData.append("upload_preset", "blog-image");

        const cloudinaryRes = await fetch(
          "https://api.cloudinary.com/v1_1/ddc3h3udr/upload",
          {
            method: "POST",
            body: imageFormData,
          }
        );

        const cloudinaryData = await cloudinaryRes.json();
        imageUrl = cloudinaryData.secure_url;
      }

      const blogData = {
        title: formData.title,
        content: formData.content,
        category: formData.category,
        imageUrl,
      };

      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3000/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Blog created successfully!"); // Success toast
        setFormData({
          title: "",
          content: "",
          image: null,
          category: "",
        }); // Clear form after successful submission
      } else {
        toast.error(result.message || "Error creating blog!"); // Error toast
      }
    } catch (error) {
      console.error("Error uploading blog:", error);
      toast.error("Something went wrong, please try again!"); // General error toast
    }
  };

  return (
    <div className="container mx-auto px-5 py-20">
      <h1 className="text-3xl font-semibold mb-6">Create Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <textarea
          name="content"
          placeholder="Blog content"
          value={formData.content}
          onChange={handleChange}
          className="w-full h-40 p-3 border rounded resize-none"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;