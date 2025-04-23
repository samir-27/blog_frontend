type Blog = {
  id: number;
  title: string;
  image: string;
  desc: string;
};


const HomeBlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-5">
      <div className="border border-gray-200 p-6 rounded-lg shadow-lg transition-transform transform ">
        <img className="h-40 rounded-lg w-full object-cover object-center mb-6" src={blog.image} alt={blog.title} />
        <h2 className="text-2xl font-semibold title-font mb-4">{blog.title}</h2>
        <p className="leading-relaxed text-base text-gray-700 transition-colors duration-500 ">{blog.desc}</p>
      </div>
    </div>


  );
};

export default HomeBlogCard;
