import { DynamicComponent } from "@/global/components/dynamic-component";
import { getAllBlogs } from "@/data/server-actions/blog";
import { getPageBySlug } from "@/data/server-actions/pages";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getAllBlogs();

  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

const withPrefix = (slug: string) => {
  return `/blog/${slug}`;
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data } = await getPageBySlug(withPrefix(params.slug));
  return <DynamicComponent page={data} />;
}
