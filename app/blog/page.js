import BlogPosts from "@/components/blog/BlogPosts";
import MainPost from "@/components/blog/MainPost";
import NoBlogs from "@/components/blog/NoBlogs";
import Cta from "@/components/home/Cta";
import { fetchBlogs } from "@/lib/services/api";

export const revalidate = 0;

async function page() {
  const data = await fetchBlogs();

  const Posts = data.posts;

  const count = data.count;
  // const totalPages = Math.ceil(count / TOTAL_POSTS_BLOG);

  const firstPost = Posts[0];

  if (Posts.length < 1) return <NoBlogs />;

  return (
    <div className="">
      <MainPost post={firstPost} />
      <BlogPosts posts={Posts.slice(0)} />
      <Cta />
    </div>
  );
}

export default page;
