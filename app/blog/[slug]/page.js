import { urlFor } from "@/blog/lib/sanity-img";
import Cta from "@/components/home/Cta";
import { myPortableTextComponents } from "@/lib/constants";
import { fetchPost } from "@/lib/services/api";
import { format } from "date-fns";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function page({ params }) {
  const { slug } = params;

  const post = await fetchPost(slug);

  if (!post)
    return (
      <div className="mx-auto h-screen max-w-[840px] text-white">
        <h1 className="py-56 text-center text-3xl">Post not found 😓</h1>
      </div>
    );

  return (
    <>
      <div className="mx-auto max-w-[840px] px-5">
        <div className="text-white">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="w-fit rounded-md bg-[#4B6BFB] px-[10px] py-1 text-sm font-medium"
              >
                {category.title}
              </span>
            ))}
          </div>
          <h1 className="mb-5 text-4xl font-semibold">{post.title}</h1>
          <div className="mb-8 flex items-center gap-5 font-medium text-[#97989F]">
            <div className="flex items-center gap-3">
              <Image
                src={urlFor(post.author?.image)?.url()}
                alt={`Image of ${post.author.name} the author of ${post.title} from amuse.so`}
                className="h-9 w-9 rounded-full object-cover object-center"
                width={160}
                height={160}
              />
              <p className="">{post.author.name}</p>
            </div>
            <p>{format(new Date(post.publishedAt), "dd MMM, yyyy")}</p>
          </div>
          <Image
            src={urlFor(post.mainImage)?.url()}
            alt={`Image of post of ${post.title} from amuse.so, written by ${post.author.name}`}
            className="mb-8 h-[480px] w-full rounded-xl object-cover object-center"
            width={1200}
            height={1200}
          />
          <div className="text-[#C1C1C1]">
            <PortableText
              value={post.body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}

export default page;
