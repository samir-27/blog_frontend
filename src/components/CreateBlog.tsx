import { useState } from "react";

type BlogFormData = {
  title: string;
  description: string;
  image: File | null;
  category: string;
  tags: string;
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
    description: "",
    image: null,
    category: "",
    tags: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blog submitted:", formData);
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

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <textarea
          name="description"
          placeholder="Blog Description"
          value={formData.description}
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
