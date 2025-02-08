import { abhayanad_blog, logo_abhyananda } from "../assets";
import { blogFeed } from "../constants";

const BlogSection = () => {
  return (
    <div className="flex flex-col w-full items-center py-6 mx-auto">
      <div className="flex items-center py-4">
        <img src={logo_abhyananda} alt="Logo" className="w-24 h-24" />
      </div>
      <h1 className="text-3xl text-gray-700 font-medium">
        Latest From Our Blog
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full px-4">
        <div className="flex items-center py-4 md:w-1/2 w-full px-4 md:px-0">
          <img src={abhayanad_blog} alt="abhayanad_blog" />
        </div>
        <div className=" mr-auto ml-12">
          {blogFeed.map((blog) => (
            <div key={blog.id} className="flex items-center my-6">
              <img src={blog.image} alt={blog.title} className="md:w-20 md:h-20 w-10 h-10" />
              <h1 className="text-sm ml-6 font-semibold">{blog.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="border-2 duration-500 border-red-500 py-2.5 my-4 px-4 text-red-500 hover:text-white hover:bg-red-500"
      >
        Read All
      </button>
    </div>
  );
};

export default BlogSection;
