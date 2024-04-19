import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { getAllBlogs } from "@/data/server-actions/blog";

export const dynamic = "force-dynamic";

export default async function Blog() {
  const posts = await getAllBlogs();

  const sorted = [...posts].sort((a, b) => {
    return dayjs(b.publishedDate).unix() - dayjs(a.publishedDate).unix();
  });

  return (
    <div className="min-h-[50vh]">
      <h1 className="text-5xl pb-12">Articles & News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-48">
        {sorted.map((post, index) => (
          <Link key={`post-${index}`} href={post.slug} className="blog-link-image">
            <div className="relative h-[400px] w-full rounded-md overflow-hidden">
              <Image
                src={post.headerImage.url}
                alt={post.headerImage.description || ""}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <h2 className="text-xl pt-4 pb-2">{post.title}</h2>
            <div className="flex gap-2 text-[#999]">
              <p>{dayjs(post.publishedDate).format("MMMM DD, YYYY")}</p>
              <span>{"-"}</span>
              <p>{post.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
