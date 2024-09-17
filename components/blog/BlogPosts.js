import BlogItem from "./BlogItem";

function BlogPosts({ posts }) {
  return (
    <section className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-5">
      <h2 className="mb-8 bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold text-transparent lg:text-[52px]">
        Latest Post
      </h2>

      <div className="mb-10 grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogItem key={index} post={post} />
        ))}
      </div>

      <button className="w-fit rounded-[4px] bg-primary-100 px-5 py-3 font-bold text-primary-500 transition-all duration-300 hover:bg-primary-700 hover:text-primary-100">
        Load More Posts
      </button>
    </section>
  );
}

export default BlogPosts;
