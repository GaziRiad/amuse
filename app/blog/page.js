import BlogPosts from "@/components/blog/BlogPosts";
import MainPost from "@/components/blog/MainPost";
import NoBlogs from "@/components/blog/NoBlogs";
import Cta from "@/components/home/Cta";
import { TOTAL_POSTS_BLOG } from "@/lib/constants";
import { fetchBlogs } from "@/lib/services/api";

export const revalidate = 0;

async function page({ searchParams }) {
  //Building the filter
  const category = searchParams.category ?? "view-all";
  let page = searchParams.page ?? 1;
  page = Number(page);

  const filter = {
    category,
    page,
  };

  console.log(filter);

  const data = await fetchBlogs(filter, TOTAL_POSTS_BLOG);

  const Posts = data.posts;

  const count = data.count;
  const totalPages = Math.ceil(count / TOTAL_POSTS_BLOG);

  const firstPost = Posts[0];

  if (Posts.length < 1) return <NoBlogs />;

  return (
    <div className="">
      <MainPost post={firstPost} />
      <BlogPosts posts={Posts.slice(0)} count={totalPages} />
      <Cta />
    </div>
  );
}

export default page;
