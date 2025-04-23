import HomeBlogCard from "./HomeBlogCard";

const RecentBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Rise of AI",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3inZMGPA7eN6PgEEFroEaRaCDtwu8YMj1iQ&s",
      desc: "Discover how artificial intelligence is transforming industries."
    },
    {
      id: 2,
      title: "Minimalist Living",
      image: "https://media.designcafe.com/wp-content/uploads/2024/01/26123710/minimalistic-living-room-ideas.jpg",
      desc: "Embrace simplicity and reduce clutter for a better life."
    },
    {
      id: 3,
      title: "Top 10 Travel Destinations",
      image: "https://images.indianexpress.com/2024/07/Recognised-for-its-exceptional-beauty-and-cultural-significance-the-Taj-Mahal-a-UNESCO-World-Heritage-Site-in-Agra-India-has-also-been-featured-in-the-list-in-the-22nd-position.-Here-are-th.jpg",
      desc: "Explore the most breathtaking places to visit this year."
    },
    {
      id: 4,
      title: "Healthy Eating Habits",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrH1EkUkZq8lOgsvjeTJxKX9O_NhsJYDQNSw&s",
      desc: "A guide to eating smarter and living longer."
    },
    {
      id: 5,
      title: "Remote Work Tips",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNukKFusPo-N1SxXC_x2VHXgh5P2ASNiMmQ&s",
      desc: "Boost your productivity while working from home."
    },
    {
      id: 6,
      title: "Financial Freedom 101",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREI3ujqa0XYhOmZPrRhRvgo7ek41ucRZfmVQ&s",
      desc: "Steps to take control of your finances and build wealth."
    },
    {
      id: 7,
      title: "Learn to Code",
      image: "https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg",
      desc: "Resources and advice to kickstart your coding journey."
    },
    {
      id: 8,
      title: "Mindfulness Meditation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9S8sRAuv356o_jcecfPCJ7V3NGnGQeM2pyg&s",
      desc: "Techniques to stay present and reduce stress."
    },
    {
      id: 9,
      title: "Home Workout Plans",
      image: "https://hips.hearstapps.com/hmg-prod/images/muscular-man-doing-push-ups-during-home-workout-royalty-free-image-1678105289.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
      desc: "Get fit with effective routines from your living room."
    },
    {
      id: 10,
      title: "Photography for Beginners",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8mMueoTB-1P8EIn8iSoyEq44Ruj-_MEE2g&s",
      desc: "Learn how to capture stunning images with any camera."
    }
  ];



  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div>
            <h1 className='text-5xl text-gray-900 font-semibold pb-10'>Recent Blogs</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {blogs.slice(0,8).map((blog) => (
              <HomeBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecentBlog
