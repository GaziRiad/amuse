import { urlFor } from "@/blog/lib/sanity-img";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

// const Post = {
//   img: "/images/post/post1.jpg", // Make sure this image path is correct
//   categories: ["Optimized learning", "technology"],
//   title:
//     "The Impact of Technology on the Workplace: How Technology is Changing",
//   author: {
//     name: "Riad Hallouch",
//     img: "/images/messi.jpg",
//   },
//   date: "May 1, 2024",
// };

function MainPost({ post }) {
  return (
    <section className="mx-auto max-w-[1200px] px-5">
      <Link
        href="/blog/post"
        className="relative mb-12 block overflow-hidden rounded-xl p-10 pt-20 text-white lg:mb-28 lg:pt-44"
        style={{
          backgroundImage: `url(${urlFor(post.mainImage).url()})`,
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
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="w-fit rounded-md bg-[#4B6BFB] px-3 py-1"
              >
                {category.title}
              </span>
            ))}
          </div>
          <h3 className="mb-6 max-w-4xl text-3xl font-bold leading-normal lg:text-[40px]">
            {post.title}
          </h3>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={urlFor(post.author.image).url()}
                alt={`Image of ${post.author.name}`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover object-center"
              />
              <p>{post.author.name}</p>
            </div>
            <p className="">
              {format(new Date(post.publishedAt), "dd MMM, yyyy")}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default MainPost;
