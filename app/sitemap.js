import { client } from "@/blog/lib/client";

async function getData() {
  const query = `*[_type == "post"] {
    "currentSlug": slug.current,
      "updated": publishedAt
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function sitemap() {
  const data = await getData();
  const posts = data.map((post) => ({
    url: `http://localhost:3000/blog/${post.currentSlug}`,
    lastModified: post.lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: "http://localhost:3000/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "http://localhost:3000/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "http://localhost:3000/terms-of-use",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "http://localhost:3000/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts,
  ];
}
