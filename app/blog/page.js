import BlogPosts from "@/components/blog/BlogPosts";
import MainPost from "@/components/blog/MainPost";
import Cta from "@/components/home/Cta";

function page() {
  return (
    <div className="">
      <MainPost />
      <BlogPosts />
      <Cta />
    </div>
  );
}

export default page;
