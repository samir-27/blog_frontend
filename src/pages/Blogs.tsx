import { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import Filter from '../components/Filter'

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const fetchBlogs = async () => {
    try {
      const responce = await fetch('http://localhost:3000/posts');
      const data = await responce.json();
      setBlogs(data);
      setFilteredBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  const handleFilter = async (filters: any) => {
    const { searchQuery, selectedCategory, sortByDate } = filters;
    let filteredData = blogs;

    // Filter by title
    if (searchQuery) {
      filteredData = filteredData.filter((blog: any) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filteredData = filteredData.filter(
        (blog: any) => blog.category === selectedCategory
      );
    }

    // Sort by date
    filteredData = filteredData.sort((a: any, b: any) =>
      sortByDate === "desc"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    setFilteredBlogs(filteredData);
  };

  return (
    <div className='bg-gray-200 min-h-screen'>

    <div className="container mx-auto p-5">
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        <span className="text-2xl">🔍</span>
      </button>
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-50 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          >
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>
        <Filter onFilter={handleFilter} />
      </div>


      <div className="py-10">
        {filteredBlogs.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
          </div>
  );
};

export default Blogs
