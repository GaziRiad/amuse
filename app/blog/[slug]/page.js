import { fetchPost } from "@/lib/services/api";
import { PortableText } from "next-sanity";

async function page({ params }) {
  const { slug } = params;

  const post = await fetchPost(slug);

  if (!post)
    return (
      <div className="mx-auto h-screen max-w-[800px] text-white">
        <h1 className="py-56 text-center text-3xl">Post not found 😓</h1>
      </div>
    );

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="text-white">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}

export default page;
