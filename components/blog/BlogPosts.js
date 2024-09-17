import BlogItem from "./BlogItem";

const Posts = [
  {
    img: "/images/post/post1.jpg", // Make sure this image path is correct
    categories: ["Optimized learning"],
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: {
      name: "Riad Hallouch",
      img: "/images/messi.jpg",
    },
    date: "May 1, 2024",
  },
  {
    img: "/images/post/post1.jpg", // Make sure this image path is correct
    categories: ["technlogy"],
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: {
      name: "Riad Hallouch",
      img: "/images/messi.jpg",
    },
    date: "May 1, 2024",
  },
  {
    img: "/images/post/post1.jpg", // Make sure this image path is correct
    categories: ["Optimized learning"],
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: {
      name: "Riad Hallouch",
      img: "/images/messi.jpg",
    },
    date: "May 1, 2024",
  },
  {
    img: "/images/post/post1.jpg", // Make sure this image path is correct
    categories: ["technlogy"],
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: {
      name: "Riad Hallouch",
      img: "/images/messi.jpg",
    },
    date: "May 1, 2024",
  },
  {
    img: "/images/post/post1.jpg", // Make sure this image path is correct
    categories: ["Optimized learning"],
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: {
      name: "Riad Hallouch",
      img: "/images/messi.jpg",
    },
    date: "May 1, 2024",
  },
];

function BlogPosts() {
  return (
    <section className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-5">
      <h2 className="mb-8 bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold text-transparent lg:text-[52px]">
        Latest Post
      </h2>

      <div className="mb-10 grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-3">
        {Posts.map((post, index) => (
          <BlogItem key={index} post={post} />
        ))}
      </div>

      <button className="w-fit rounded-[4px] bg-primary-100 px-5 py-3 font-bold text-primary-500 transition-all duration-300 hover:bg-primary-700 hover:text-primary-100">
        Load More Post
      </button>
    </section>
  );
}

export default BlogPosts;
