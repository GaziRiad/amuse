import Image from "next/image";
import Link from "next/link";

const Post = {
  img: "/images/post/post1.jpg", // Make sure this image path is correct
  categories: ["Optimized learning", "technology"],
  title:
    "The Impact of Technology on the Workplace: How Technology is Changing",
  author: {
    name: "Riad Hallouch",
    img: "/images/messi.jpg",
  },
  date: "May 1, 2024",
};

function MainPost() {
  return (
    <section className="mx-auto max-w-[1200px] px-5">
      <Link
        href="/blog/post"
        className="relative mb-12 block overflow-hidden rounded-xl p-10 pt-20 text-white lg:mb-28 lg:pt-44"
        style={{
          backgroundImage: `url(${Post.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional: Overlay to darken the background for better text contrast */}
        <div className="absolute inset-0 bg-[#14162466]"></div>

        {/* Content */}
        <div className="relative">
          <div className="mb-4 flex items-center gap-3 text-sm font-medium">
            {Post.categories.map((category, index) => (
              <span
                key={index}
                className="w-fit rounded-md bg-[#4B6BFB] px-3 py-1"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="mb-6 max-w-4xl text-3xl font-bold lg:text-[40px]">
            {Post.title}
          </h3>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={Post.author.img}
                alt={`Image of ${Post.author.name}`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover object-center"
              />
              <p>{Post.author.name}</p>
            </div>
            <p className="">{Post.date}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default MainPost;
