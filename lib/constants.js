import { urlFor } from "@/blog/lib/sanity-img";
import Image from "next/image";
import Link from "next/link";

export const AppPlatforms = [
  {
    name: "iOS",
    image: "/images/app-store.png",
    href: "#",
  },
  {
    name: "Android",
    image: "/images/google-play.png",
    href: "#",
  },
];

// BLOG related
export const TOTAL_POSTS_BLOG = 3;

//
export const myPortableTextComponents = {
  types: {
    // image: ({ value }) => <img src={value.imageUrl} />,
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt="Image"
        width={800}
        height={800}
        className="mb-8 h-96 object-cover object-center"
      />
    ),
    callToAction: ({ value, isInline }) => <a href={value.url}>{value.text}</a>,
  },

  marks: {
    em: ({ children }) => (
      <em className="font-semibold text-[#1C1B17]">{children}</em>
    ),

    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          id=""
          className="text-neutral-800 underline underline-offset-2"
        >
          {children}
        </Link>
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children, node }) => (
      <h1
        id={node?._key}
        className="font-display mb-6 text-2xl font-medium text-[#1C1B17] lg:text-3xl"
      >
        {children}
      </h1>
    ),
    h2: ({ children, node }) => (
      <h2
        id={node?._key}
        className="font-display mb-6 text-2xl font-medium text-[#1C1B17] lg:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children, node }) => (
      <h3
        id={node?._key}
        className="font-display mb-1 text-xl font-medium text-[#1C1B17] lg:text-2xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children, node }) => (
      <h4
        id={node?._key}
        className="font-display mb-1 text-lg font-medium text-[#1C1B17] lg:text-xl"
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Styling for normal text
    normal: ({ children, index, value, next }) => {
      return (
        <p className="mb-6 text-base leading-relaxed text-[#1C1B17]/80">
          {children}
        </p>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="mb-6 flex list-disc flex-col gap-2 pl-10">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 flex list-decimal flex-col gap-2 pl-10">
        {children}
      </ol>
    ),
  },
};
