import Image from "next/image";
import Link from "next/link";

function BlogItem({ post }) {
  return (
    <Link href="#" className="rounded-xl bg-[#181A2A] px-[10px] py-4">
      <Image
        src={post.img}
        alt={`Image of post of ${post.title} from amuse.so, written by ${post.author.name}`}
        className="mb-6 rounded-md object-cover object-center"
        width={400}
        height={400}
      />

      <div className="p-2">
        <div className="mb-4 flex items-center gap-3 text-sm font-medium text-[#4B6BFB]">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="w-fit rounded-md bg-[#4B6BFB]/5 px-3 py-1"
            >
              {category}
            </span>
          ))}
        </div>
        <p className="mb-5 text-2xl font-semibold leading-normal text-white">
          {post.title}
        </p>

        <div className="flex items-center gap-5 font-medium text-[#97989F]">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.img}
              alt={`Image of ${post.author.name} the author of ${post.title} from amuse.so`}
              className="h-9 w-9 rounded-full object-cover object-center"
              width={160}
              height={160}
            />
            <p className="">{post.author.name}</p>
          </div>
          <p>{post.date}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogItem;
