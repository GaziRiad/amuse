import Pagination from "../ui/Pagination";
import BlogItem from "./BlogItem";

function BlogPosts({ posts, count }) {
  return (
    <section className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-5">
      <h2 className="mb-8 bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold text-transparent lg:text-[52px]">
        Latest Post
      </h2>

      <div className="mb-8 grid grid-cols-1 gap-x-5 gap-y-8 lg:mb-16 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogItem key={index} post={post} />
        ))}
      </div>

      <Pagination count={count} />
    </section>
  );
}

export default BlogPosts;
