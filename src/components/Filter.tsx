import React, { useState } from "react";

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

const Filter = ({ onFilter }: { onFilter: (filters: any) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortByDate, setSortByDate] = useState("desc"); // 'asc' or 'desc'

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortByDate(e.target.value);
  };

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({
      searchQuery,
      selectedCategory,
      sortByDate,
    });
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filter Blogs</h2>
      <form onSubmit={handleFilterSubmit} className="space-y-4">
        {/* Search by Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Search by Title</label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search blogs..."
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Category</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-3 border border-gray-300 rounded"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Sort by Date</label>
          <select
            value={sortByDate}
            onChange={handleSortChange}
            className="w-full p-3 border border-gray-300 rounded"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
