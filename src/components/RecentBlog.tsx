import React from 'react'

const RecentBlog = () => {

  const RecentBlogCard = () => {
    return (
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-800 hover:text-white text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-md">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://imageio.forbes.com/specials-images/imageserve/66e8ad4b29ea61509edd8b63//960x0.jpg?height=474&width=711&fit=bounds" alt="content" />
          <h2 className="text-lg font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>

    )
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div>
            <h1 className='text-5xl text-gray-900 font-semibold pb-10'>Recent Blogs</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <RecentBlogCard />
            <RecentBlogCard />
            <RecentBlogCard />
            <RecentBlogCard />
            <RecentBlogCard />
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecentBlog
